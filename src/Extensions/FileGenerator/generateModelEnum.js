const fs = require("fs");
const path = require("path");

// Path to the ModalEnum file
const MODEL_ENUM_FILE = "./src/enums/Model.ts";

// Function to convert input to UPPER_SNAKE_CASE
const toUpperSnakeCase = (input) => {
  return input
    .replace(/([a-z])([A-Z])/g, "$1_$2") // Convert camelCase to snake_case
    .replace(/[_\s]+/g, "_")             // Normalize underscores or spaces
    .toUpperCase();                      // Convert to uppercase
};

// Take the name dynamically from the terminal
const nameInput = process.argv[2];

if (!nameInput) {
  console.error("Please provide a name as an argument.");
  process.exit(1);
}

// Generate the enum entries for the given name
const generateEnumEntries = (name) => {
  const baseName = toUpperSnakeCase(name);
  return [
    `  ${baseName}_EDIT = "${baseName.toLowerCase()}.edit",`,
    `  ${baseName}_ADD = "${baseName.toLowerCase()}.add",`,
    `  ${baseName}_DELETE = "${baseName.toLowerCase()}.delete",`
  ].join("\n");
};

// Update the ModalEnum file
const updateModelEnumFile = () => {
  if (!fs.existsSync(MODEL_ENUM_FILE)) {
    console.error(`Error: File ${MODEL_ENUM_FILE} does not exist.`);
    return;
  }

  // Read the existing content of the file
  const fileContent = fs.readFileSync(MODEL_ENUM_FILE, "utf-8");

  // Generate the new entries for the given name
  const newEntries = generateEnumEntries(nameInput);

  // Check if any of the new keys already exist in the file
  const existingKeys = Array.from(
    fileContent.matchAll(/(\w+)\s*=\s*".+?"/g),
    (match) => match[1]
  );
  const baseName = toUpperSnakeCase(nameInput);

  const duplicateKeys = existingKeys.filter((key) =>
    [`${baseName}_EDIT`, `${baseName}_ADD`, `${baseName}_DELETE`].includes(key)
  );

  if (duplicateKeys.length > 0) {
    console.log(`The keys ${duplicateKeys.join(", ")} already exist. No changes made.`);
    return;
  }

  // Inject the new entries before the closing brace of the enum
  const updatedContent = fileContent.replace(
    /(export enum ModalEnum {\n)/,
    `$1${newEntries}\n`
  );

  // Write the updated content back to the file
  fs.writeFileSync(MODEL_ENUM_FILE, updatedContent, "utf-8");
  console.log(`Enum entries for "${nameInput}" added successfully to ModalEnum.`);
};

updateModelEnumFile();
