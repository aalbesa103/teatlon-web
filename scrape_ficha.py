import urllib.request
import re
import json

urls = {
    "fotogenesis": "https://www.alternativateatral.com/obra96573-fotogenesis",
    "jubilacion": "https://www.alternativateatral.com/obra92755-jubilacion-grotesco-futurista",
    "soysola": "https://www.alternativateatral.com/obra97151-soy-sola",
    "cuandolascrien": "https://www.alternativateatral.com/obra83586-cuando-las-ranas-crien-pelos",
    "desalojo": "https://www.alternativateatral.com/obra80776-desalojo"
}

headers = {'User-Agent': 'Mozilla/5.0'}
results = {}

for key, url in urls.items():
    try:
        req = urllib.request.Request(url, headers=headers)
        html = urllib.request.urlopen(req).read().decode('utf-8', errors='ignore')
        
        # Match Ficha tecnico / Ficha t&eacute;cnico
        ficha_match = re.search(r'Ficha t', html, re.IGNORECASE)
        if ficha_match:
            idx = ficha_match.start()
            ul_start = html.find('<ul', idx)
            ul_end = html.find('</ul>', ul_start)
            if ul_start != -1 and ul_end != -1:
                ul_html = html[ul_start:ul_end+5]
                # Replace <li> with new line, then strip tags
                ul_html = ul_html.replace('<li', '\n<li')
                clean_text = re.sub(r'<[^>]+>', ' ', ul_html)
                # Split by newline and clean
                lines = [line.strip() for line in clean_text.split('\n') if line.strip()]
                results[key] = " | ".join(lines)
            else:
                results[key] = "Not found tags"
        else:
            results[key] = "No ficha section"
    except Exception as e:
        results[key] = f"Error: {e}"

print("=== RESULTS ===")
for k, v in results.items():
    print(f"{k} ::: {v}")
