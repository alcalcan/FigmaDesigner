
const project = "UEFA_Light_extra_presentation_2026-02-08_20-13-23";
const safeProject = project.replace(/[^a-zA-Z0-9_]/g, '_');
console.log(`Original: ${project}`);
console.log(`Safe:     ${safeProject}`);

if (safeProject.includes('-')) {
    console.error("FAIL: Safe project still contains hyphens!");
} else {
    console.log("PASS: Safe project contains no hyphens.");
}
