import { ComponentGenerator } from './ComponentGenerator';
import * as path from 'path';

const generator = new ComponentGenerator();
const jsonPath = path.join(process.cwd(), 'tools/extraction/Alex_CookBook/sidebar_generated_2026-01-24_11-53-54/sidebar_generated.json');
generator.generate(jsonPath, "Alex_CookBook");
console.log("Done regenerating sidebar_generated");
