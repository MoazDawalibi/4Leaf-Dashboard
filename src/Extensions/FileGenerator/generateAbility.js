const fs = require("fs");
const path = require("path");

// File path where the abilities are stored
const ABILITIES_FILE = path.join(__dirname, "./src/utils/hasAbilityFn.ts");

// Function to normalize the input name to UPPER_SNAKE_CASE (e.g., test_moaz => TEST_MOAZ, TestMoaz => TEST_MOAZ)
const normalizeToUpperSnakeCase = (input) => {
  return input
    .replace(/([a-z])([A-Z])/g, "$1_$2")  // camelCase to snake_case
    .replace(/[_\s]+/g, "_")               // normalize multiple underscores or spaces
    .toUpperCase();                        // Convert to uppercase
};

// Function to capitalize the first letter of a word
const capitalizeFirstLetter = (word) => word.charAt(0).toUpperCase() + word.slice(1);

// Take the name dynamically from the terminal
const nameInput = process.argv[2];

if (!nameInput) {
  console.error("Please provide a name as an argument.");
  process.exit(1);
}

// Normalize input name (handle camelCase, snake_case, PascalCase)
const normalizedInput = normalizeToUpperSnakeCase(nameInput);

// Generate ability functions for the given name
const generateAbilityFunctions = (name) => {
  const capitalized = capitalizeFirstLetter(name.toLowerCase());
  return `
export const canAdd${capitalized} = hasAbility(
  ABILITIES_ENUM.${name},
  ABILITIES_VALUES_ENUM.STORE,
);
export const canEdit${capitalized} = hasAbility(
  ABILITIES_ENUM.${name},
  ABILITIES_VALUES_ENUM.UPDATE,
);
export const canDelete${capitalized} = hasAbility(
  ABILITIES_ENUM.${name},
  ABILITIES_VALUES_ENUM.DELETE,
);
export const canShow${capitalized} = hasAbility(
  ABILITIES_ENUM.${name},
  ABILITIES_VALUES_ENUM.SHOW,
);
export const canIndex${capitalized} = hasAbility(
  ABILITIES_ENUM.${name},
  ABILITIES_VALUES_ENUM.INDEX,
);
`.trim();
};

const updateAbilitiesFile = () => {
  if (!fs.existsSync(ABILITIES_FILE)) {
    console.error(`Error: File ${ABILITIES_FILE} does not exist.`);
    return;
  }

  // Read the existing content of the file
  const fileContent = fs.readFileSync(ABILITIES_FILE, "utf-8");

  // Check for duplicates
  const alreadyExists = fileContent.includes(`canAdd${capitalizeFirstLetter(normalizedInput)}`);
  if (alreadyExists) {
    console.log(`Abilities for "${normalizedInput}" already exist. No changes made.`);
    return;
  }

  // Generate new abilities
  const newAbilities = generateAbilityFunctions(normalizedInput);

  // Append the new abilities at the end of the file
  const updatedContent = `${fileContent.trim()}\n\n${newAbilities}\n`;

  // Write the updated content back to the file
  fs.writeFileSync(ABILITIES_FILE, updatedContent, "utf-8");
  console.log(`Abilities for "${normalizedInput}" added successfully to hasAbilityFn.ts.`);
};

// Run the update
updateAbilitiesFile();
