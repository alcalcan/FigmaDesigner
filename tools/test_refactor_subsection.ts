import { ComponentRefactorer } from './ComponentRefactorer';
import * as path from 'path';

const refactorer = new ComponentRefactorer();
const target = path.join(__dirname, '../components/Alex_CookBook/SubSection_generated/SubSection_generated.ts');

console.log(`Refactoring ${target}...`);
refactorer.refactor(target);
console.log('Done.');
