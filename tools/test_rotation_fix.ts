import { detectBakedRotation } from '../components/TransformHelpers';

console.log("🚀 Running Baked Rotation Detection Tests...");

function assert(condition: boolean, message: string) {
    if (!condition) {
        console.error(`❌ FAILED: ${message}`);
        process.exit(1);
    } else {
        console.log(`✅ PASSED: ${message}`);
    }
}

// Case 1: Chevron Down (Rotated)
// SVG is Landscape (10x6), JSON is Portrait (5.33x9.33)
assert(detectBakedRotation(10, 6, 5.33, 9.33) === true, "Chevron Down (10x6 vs 5.33x9.33) should be detected as rotated");

// Case 2: Landscape Match (Not Rotated)
// SVG is Landscape (10x6), JSON is Landscape (9.33x5.33)
assert(detectBakedRotation(10, 6, 9.33, 5.33) === false, "Landscape Match (10x6 vs 9.33x5.33) should NOT be detected as rotated");

// Case 3: Square Match (Not Rotated)
assert(detectBakedRotation(16, 16, 16, 16) === false, "Square Match (16x16 vs 16x16) should NOT be detected as rotated");

// Case 4: Complete Mismatch (Different Icons)
// SVG is 100x10, JSON is 10x100. AR Swapped matches, but area is vastly different.
assert(detectBakedRotation(100, 10, 10, 10) === false, "Area mismatch should prevent false positive detection");

console.log("\n🎉 All tests passed!");
