const path = require('path');
const EXCLUDED_DIRS = ['Football_Crests'];
const dir = 'components/Football_Crests';
const dirName = path.basename(dir);
console.log("dirName:", dirName);
console.log("Excluded:", EXCLUDED_DIRS.some(ex => dirName.includes(ex)));
