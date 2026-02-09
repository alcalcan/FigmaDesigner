
import zipfile
import xml.etree.ElementTree as ET
import os
import json

ppt_path = "/Users/alexandrucalcan/Library/CloudStorage/OneDrive-ENDAVA/1 UX Designs/20250617_UEFA/UX_Projects/Booking/EURO28 Booking.com promotion in Secutix ticketing portal-2.pptx"

def analyze_ppt(path):
    if not os.path.exists(path):
        print(f"Error: File not found at {path}")
        return

    print(f"Analyzing {path}...")
    
    try:
        with zipfile.ZipFile(path, 'r') as z:
            # List all files
            files = z.namelist()
            print(f"Total files in zip: {len(files)}")
            
            # Count slides
            slide_files = [f for f in files if f.startswith('ppt/slides/slide') and f.endswith('.xml')]
            print(f"Slide count: {len(slide_files)}")
            
            # Analyze each slide
            total_shapes = 0
            total_images = 0
            total_text_chars = 0
            
            ns = {
                'a': 'http://schemas.openxmlformats.org/drawingml/2006/main',
                'p': 'http://schemas.openxmlformats.org/presentationml/2006/main',
                'r': 'http://schemas.openxmlformats.org/officeDocument/2006/relationships'
            }
            
            for slide_file in sorted(slide_files):
                xml_content = z.read(slide_file)
                root = ET.fromstring(xml_content)
                
                # Count shapes (sp)
                shapes = root.findall('.//p:sp', ns)
                pics = root.findall('.//p:pic', ns)
                
                # Count text
                text_content = ""
                paragraphs = root.findall('.//a:p', ns)
                for p in paragraphs:
                    runs = p.findall('.//a:r/a:t', ns)
                    for r in runs:
                        if r.text:
                            text_content += r.text
                            
                print(f"  {slide_file}: Shapes={len(shapes)}, Images={len(pics)}, TextLen={len(text_content)}")
                
                total_shapes += len(shapes)
                total_images += len(pics)
                total_text_chars += len(text_content)
                
            print("-" * 30)
            print(f"Total Shapes: {total_shapes}")
            print(f"Total Images: {total_images}")
            print(f"Total Text Characters: {total_text_chars}")
            
    except Exception as e:
        print(f"Error analyzing PPT: {e}")

if __name__ == "__main__":
    analyze_ppt(ppt_path)
