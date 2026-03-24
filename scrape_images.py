import urllib.request
import re
import os

urls = {
    "fotogenesis": "https://www.alternativateatral.com/obra96573-fotogenesis",
    "jubilacion": "https://www.alternativateatral.com/obra92755-jubilacion-grotesco-futurista",
    "soysola": "https://www.alternativateatral.com/obra97151-soy-sola",
    "cuandolascrien": "https://www.alternativateatral.com/obra83586-cuando-las-ranas-crien-pelos",
    "desalojo": "https://www.alternativateatral.com/obra80776-desalojo"
}

os.makedirs('img', exist_ok=True)

for key, url in urls.items():
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        html = urllib.request.urlopen(req).read().decode('utf-8', errors='ignore')
        match = re.search(r'<meta property="og:image" content="(.*?)"', html)
        if match:
            img_url = match.group(1)
            print(f"Downloading {key} from {img_url}")
            img_data = urllib.request.urlopen(img_url).read()
            with open(f"img/{key}.jpg", 'wb') as f:
                f.write(img_data)
        else:
            print(f"No image found for {key}")
    except Exception as e:
        print(f"Error {key}: {e}")
