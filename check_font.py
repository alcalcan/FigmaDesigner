
import sys
import struct

def get_name(font, nameID):
    pass # placeholder for brevity, full script below

def read_font_details(path):
    with open(path, 'rb') as f:
        data = f.read()
    
    # Simple parser for TTF name table
    # This is rough but should work for standard TTF/OTF
    
    try:
        num_tables = struct.unpack('>H', data[4:6])[0]
        offset = 12
        name_offset = 0
        
        for _ in range(num_tables):
            tag = data[offset:offset+4].decode('utf-8', 'ignore')
            checksum = struct.unpack('>I', data[offset+4:offset+8])[0]
            toffset = struct.unpack('>I', data[offset+8:offset+12])[0]
            length = struct.unpack('>I', data[offset+12:offset+16])[0]
            
            if tag == 'name':
                name_offset = toffset
                break
            offset += 16
            
        if not name_offset:
            print("No name table found")
            return

        count = struct.unpack('>H', data[name_offset+2:name_offset+4])[0]
        string_offset = struct.unpack('>H', data[name_offset+4:name_offset+6])[0] + name_offset
        
        entry_offset = name_offset + 6
        
        families = set()
        styles = set()
        
        for _ in range(count):
            pid = struct.unpack('>H', data[entry_offset:entry_offset+2])[0]
            eid = struct.unpack('>H', data[entry_offset+2:entry_offset+4])[0]
            lid = struct.unpack('>H', data[entry_offset+4:entry_offset+6])[0]
            nid = struct.unpack('>H', data[entry_offset+6:entry_offset+8])[0]
            length = struct.unpack('>H', data[entry_offset+8:entry_offset+10])[0]
            soffset = struct.unpack('>H', data[entry_offset+10:entry_offset+12])[0]
            
            # Read string
            spos = string_offset + soffset
            raw_string = data[spos:spos+length]
            
            decoded = None
            if pid == 3 and eid == 1: # Windows Unicode
                decoded = raw_string.decode('utf-16-be', 'ignore')
            elif pid == 1 and eid == 0: # Mac Roman
                decoded = raw_string.decode('mac_roman', 'ignore')
            
            if decoded:
                decoded = decoded.strip()
                if nid == 1: # Family
                    families.add(decoded)
                elif nid == 2: # Subfamily (Style)
                    styles.add(decoded)
                elif nid == 16: # Typographic Family
                    families.add(decoded)
                elif nid == 17: # Typographic Subfamily
                    styles.add(decoded)

            entry_offset += 12
            
        print(f"Prop Families: {list(families)}")
        print(f"Prop Styles: {list(styles)}")
            
    except Exception as e:
        print(f"Error reading font: {e}")

if __name__ == "__main__":
    if len(sys.argv) > 1:
        read_font_details(sys.argv[1])
