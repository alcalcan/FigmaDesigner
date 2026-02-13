
import * as fs from 'fs';
import * as path from 'path';
import { ComponentRefactorer } from './bridge/server_tools/ComponentRefactorer';

const targetFile = path.resolve(__dirname, '../components/test_cap/DesktopHeader/DesktopHeader.ts');
const outputFile = path.resolve(__dirname, '../components/test_cap/DesktopHeader/RefactoredHeader.ts');

if (!fs.existsSync(targetFile)) {
    console.error(`Target file not found: ${targetFile}`);
    process.exit(1);
}

const content = fs.readFileSync(targetFile, 'utf-8');
const refactorer = new ComponentRefactorer();

try {
    console.log(`Refactoring ${targetFile}...`);
    const newContent = refactorer.refactorCode(content, 'DesktopHeader');
    fs.writeFileSync(outputFile, newContent);
    console.log(`Refactored file written to ${outputFile}`);
} catch (e) {
    console.error("Refactoring failed:", e);
    process.exit(1);
}
