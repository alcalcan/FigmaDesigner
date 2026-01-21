import { ComponentGenerator } from './ComponentGenerator';
import * as path from 'path';

const generator = new ComponentGenerator();
// Updated path for DesktopBanner
const jsonPath = path.join(process.cwd(), 'tools/extraction/Competition_newsletters/DesktopBanner_2026-01-21_13-17-18/DesktopBanner.json');
// Using "Competition_newsletters" as project name based on folder structure
generator.generate(jsonPath, "Competition_newsletters");
console.log("Done generating DesktopBanner");
