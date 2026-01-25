
const line = 'const root_child_5_child_1_child_0_child_0 = figma.exclude([root_child_5_child_1_child_0_child_0_child_0, root_child_5_child_1_child_0_child_0_child_1], figma.currentPage);';
const booleanOpRegex = /const (\w+) = figma\.(union|subtract|intersect|exclude)\(\[(.*)\], .*\);/;
const match = line.match(booleanOpRegex);

console.log('Line length:', line.length);
console.log('Regex source:', booleanOpRegex.source);
console.log('Match result:', match);

if (!match) {
    console.log('Regex failed to match.');
    // Diagnose why
    const parts = line.split('=');
    const lhs = parts[0];
    const rhs = parts[1];
    console.log('LHS:', lhs);
    console.log('RHS:', rhs);

    // Check spaces
    console.log('LHS ends with space?', lhs.endsWith(' ')); // true
    console.log('RHS starts with space?', rhs.startsWith(' ')); // true

    // Check figma.exclude part
    const callParts = rhs.split('(');
    console.log('Call part 0:', callParts[0].trim()); // figma.exclude

    // Check args
    const argStart = line.indexOf('([');
    const argEnd = line.indexOf('],');
    console.log('Arg bracket start:', argStart);
    console.log('Arg bracket end:', argEnd);
}
