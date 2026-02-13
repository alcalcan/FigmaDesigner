import { ComponentGenerator } from './bridge/server_tools/ComponentGenerator';
import * as path from 'path';

const generator = new ComponentGenerator();
// Updated path for DesktopHeader
const jsonPath = path.join(process.cwd(), 'tools/extraction/test_cap/DesktopHeader_2026-02-13_12-40-08/DesktopHeader.json');
// Using "test_cap" as project name based on folder structure
generator.generate(jsonPath, "test_cap");
console.log("Done generating DesktopHeader");
