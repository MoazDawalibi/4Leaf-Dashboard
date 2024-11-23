const fs = require("fs");
const path = require("path");

const ROUTES_FILE = "./src/Routes.tsx"; // Path to the file that contains the route definitions
const PAGES_FOLDER = "./src/Pages"; // Folder containing the pages

// Helper to convert a name to PascalCase
const toPascalCase = (str) =>
  str.replace(/(^\w|_\w)/g, (match) => match.replace("_", "").toUpperCase());

// Helper to convert a name to lowercase snake_case
const toSnakeCase = (str) =>
  str.replace(/[A-Z]/g, (letter, idx) => (idx ? "_" : "") + letter.toLowerCase());

// Helper to dynamically create imports and route items
const generateRoutes = () => {
  // Scan the pages folder for directories
  const pageDirs = fs
    .readdirSync(PAGES_FOLDER, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name.toLowerCase()); // Normalize to lowercase

  // Use a Set to ensure no duplicates
  const uniqueDirs = Array.from(new Set(pageDirs));

  const imports = [];
  const routes = [];

  uniqueDirs.forEach((page) => {
    const componentName = toPascalCase(page);
    const importPath = `./Pages/${page}/Page`;
    const abilityEnum = toSnakeCase(page).toUpperCase();

    // Add to imports
    imports.push(
      `const ${componentName} = React.lazy(() => import("${importPath}"));`
    );

    // Add to routes
    routes.push(`
      {
        header: "page_header.${toSnakeCase(page)}",
        element: <${componentName} />,
        icon: <DefaultIcon />, // Replace with actual icon
        text: "sidebar.${toSnakeCase(page)}",
        path: \`/\${ABILITIES_ENUM?.${abilityEnum}}\`,
        abilities: ABILITIES_ENUM?.${abilityEnum},
        abilities_value: ABILITIES_VALUES_ENUM.INDEX,
        prevPath: 0,
      },
    `);
  });

  return { imports, routes };
};

const updateRoutesFile = () => {
  const { imports, routes } = generateRoutes();

  // Remove duplicates from imports and routes
  const uniqueImports = [...new Set(imports)];
  const uniqueRoutes = [...new Set(routes)];

  // Read the existing file
  const fileContent = fs.readFileSync(ROUTES_FILE, "utf-8");

  // Replace the imports section
  const updatedImports = fileContent.replace(
    /\/\/ START: DYNAMIC IMPORTS[\s\S]*?\/\/ END: DYNAMIC IMPORTS/,
    `// START: DYNAMIC IMPORTS\n${uniqueImports.join("\n")}\n// END: DYNAMIC IMPORTS`
  );

  // Replace the routes section
  const updatedRoutes = updatedImports.replace(
    /\/\/ START: DYNAMIC ROUTES[\s\S]*?\/\/ END: DYNAMIC ROUTES/,
    `// START: DYNAMIC ROUTES\n${uniqueRoutes.join("\n")}\n// END: DYNAMIC ROUTES`
  );

  // Write the updated content back
  fs.writeFileSync(ROUTES_FILE, updatedRoutes, "utf-8");
};

updateRoutesFile();
