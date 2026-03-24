import sys
import subprocess
import codecs

with codecs.open("output_utf8.txt", "w", "utf-8") as f:
    def install_and_import(package):
        try:
            __import__(package)
        except ImportError:
            subprocess.check_call([sys.executable, "-m", "pip", "install", package])

    install_and_import('pandas')
    install_and_import('openpyxl')
    install_and_import('docx')

    import pandas as pd
    import docx

    f.write("=== EXCEL DATA ===\n")
    try:
        xls = pd.ExcelFile('festival_teatro_combos.xlsx')
        for sheet_name in xls.sheet_names:
            f.write(f"\n--- Sheet: {sheet_name} ---\n")
            df = pd.read_excel(xls, sheet_name=sheet_name)
            f.write(df.to_string() + "\n")
    except Exception as e:
        f.write(f"Excel error: {e}\n")

    f.write("\n=== DOCX DATA ===\n")
    try:
        doc = docx.Document('Reuniones Peripallozza..docx')
        for para in doc.paragraphs:
            if para.text.strip():
                f.write(para.text + "\n")
    except Exception as e:
        f.write(f"Docx error: {e}\n")
