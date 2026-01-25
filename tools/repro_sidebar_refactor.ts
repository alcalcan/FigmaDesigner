
import { ComponentRefactorer } from './ComponentRefactorer';
import * as path from 'path';

(async () => {
    const refactorer = new ComponentRefactorer();
    const targetFile = path.join(process.cwd(), 'components/Alex_CookBook/sidebar_generated/sidebar_generated.ts');

    console.log(`🚀 [Repro] Running refactorer on: ${targetFile}`);
    await refactorer.refactor(targetFile);
})();
