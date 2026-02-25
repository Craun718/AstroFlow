
import zipfile
import xml.etree.ElementTree as ET
import sys

def extract_text_from_docx(docx_path):
    try:
        with zipfile.ZipFile(docx_path) as document:
            xml_content = document.read('word/document.xml')
            tree = ET.fromstring(xml_content)
            
            # Find all text nodes
            # The namespace for word processing ml is usually this
            namespaces = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
            
            text_parts = []
            for p in tree.findall('.//w:p', namespaces):
                p_text = []
                for t in p.findall('.//w:t', namespaces):
                    if t.text:
                        p_text.append(t.text)
                if p_text:
                    text_parts.append(''.join(p_text))
            
            return '\n'.join(text_parts)
    except Exception as e:
        return f"Error reading docx: {str(e)}"

if __name__ == "__main__":
    if len(sys.argv) > 1:
        print(extract_text_from_docx(sys.argv[1]))
    else:
        print("Usage: python extract_docx.py <filename>")
