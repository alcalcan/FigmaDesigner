import os
import shutil

crests = [
    "AEK_Larnaka", "AS_Roma", "AZ_Alkmaar", "Ajax", "Alessandria", "Anderlecht", "Antwerp", "Arsenal", "Aston_Villa",
    "Atalanta", "Atletico", "Barcelona", "Basel", "Bayern", "Benfica", "Bes_iktas_", "Betis", "Bilbao", "Bologna",
    "Braga", "Brest", "Cadiz", "Celta_de_Vigo", "Celtic_Glasgow", "Chelsea", "Club_Brugge", "Copenhagen", "Crvena_zvezda",
    "Dinamo_Kyiv", "Dinamo_Zagreb", "Djurg_rden", "Dortmund", "Elfsborg", "FCSB", "Fenerbah_e", "Feren_avaros",
    "Feyenoord", "Fiorentina", "Frankfurt", "Galatasaray", "Genk", "Gent", "Girona", "Granada", "Hertha_Berlin",
    "Hoffenheim", "Inter", "Istambul_B_", "Juventus", "Krasnodar", "Lazio", "Lech", "Leeds", "Leicester", "Leipzig",
    "Lens", "Leverkusen", "Lille", "Liverpool", "Livorno", "Ludogorets", "Lyon", "Macabi_Haifa", "Maccabi__Tel_Aviv",
    "Madrid", "Mallorca", "Malm_", "Manchester_City", "Manchester_United", "Marseille", "Midtjylland", "Milan", "Molde",
    "Monaco", "Monchengladbach", "Nantes", "Napoli", "Newcastle", "Nice", "Olympiacos", "Oporto", "PAOK", "PSG_Paris",
    "PSV", "Qarabag", "RFS", "Rangers", "Rapid_Viena", "Rayo", "Real_Sociedad", "Reggina", "Rennes", "Salzburg",
    "Sevilla", "Shakhtar", "Shalke_04", "Sheriff", "Sivasspor", "Slavia", "Slovan_Bratislava", "Sparta_Praha",
    "Sporting_CP", "Sttutgart", "Sturm_Graz", "Torpedo_Moscu", "Tottenham", "Tweente", "Union_Berlin", "Villarreal",
    "West_Ham", "Wolfsburg", "Wolverhampton", "Young_boys", "Zenit"
]

base_dir = "/Users/alexandrucalcan/Library/CloudStorage/OneDrive-ENDAVA/About ME/PERSONAL/APPS/FigmaDesigner/components"
src_dir = os.path.join(base_dir, "Alex_CookBook")
dest_dir = os.path.join(base_dir, "Football_Crests")
index_file = os.path.join(base_dir, "index.ts")

# 1. Move Folders
if not os.path.exists(dest_dir):
    os.makedirs(dest_dir)

for crest in crests:
    src_path = os.path.join(src_dir, crest)
    dest_path = os.path.join(dest_dir, crest)
    
    if os.path.exists(src_path):
        print(f"Moving {crest}...")
        shutil.move(src_path, dest_path)
    else:
        print(f"Warning: {src_path} does not exist")

# 2. Update index.ts
with open(index_file, "r") as f:
    content = f.read()

new_content = content
for crest in crests:
    # Replace ./Alex_CookBook/Crest/Crest with ./Football_Crests/Crest/Crest
    old_str = f"./Alex_CookBook/{crest}/{crest}"
    new_str = f"./Football_Crests/{crest}/{crest}"
    new_content = new_content.replace(old_str, new_str)

with open(index_file, "w") as f:
    f.write(new_content)

print("Reorganization complete.")
