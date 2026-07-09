/**
 * Patches @clerk/expo Android native module specs to use requireOptionalNativeModule
 * instead of requireNativeModule, so the app works in Expo Go without a dev build.
 *
 * The .android.js variants in @clerk/expo v3.7.x call requireNativeModule("ClerkExpo")
 * which throws "Cannot find native module 'ClerkExpo'" in Expo Go.
 */
const fs = require("fs");
const path = require("path");

const specsDir = path.resolve(
  __dirname,
  "../node_modules/@clerk/expo/dist/specs"
);

const filesToPatch = [
  "NativeClerkModule.android.js",
  "NativeClerkGoogleSignIn.android.js",
];

for (const file of filesToPatch) {
  const filePath = path.join(specsDir, file);
  if (!fs.existsSync(filePath)) continue;

  const content = fs.readFileSync(filePath, "utf8");
  if (content.includes("requireOptionalNativeModule")) continue; // already patched

  const patched = content.replace(
    /expo\.requireNativeModule\(/g,
    "expo.requireOptionalNativeModule("
  );
  fs.writeFileSync(filePath, patched, "utf8");
  console.log(`Patched: ${file}`);
}
