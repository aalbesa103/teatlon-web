import urllib.request
import re

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
        
        actuan_match = re.search(r'<strong>\s*Act[^<]*an:\s*<\/strong>(.*?)(?=<\/li>)', html, re.IGNORECASE)
        dir_match = re.search(r'<strong>\s*Direcci[^<]*n:\s*<\/strong>(.*?)(?=<\/li>)', html, re.IGNORECASE)
        
        actores = "1 Intérprete"
        director = "Perico"
        
        if actuan_match:
            raw_actores = actuan_match.group(1)
            actores = re.sub(r'<[^>]+>', '', raw_actores).strip()
            
        if dir_match:
            raw_dir = dir_match.group(1)
            director = re.sub(r'<[^>]+>', '', raw_dir).strip()
            
        results[key] = {"elenco": actores, "direccion": director}
    except Exception as e:
        pass

for k, v in results.items():
    print(f"{k} ::: {v}")
