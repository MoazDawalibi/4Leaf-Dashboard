const { execSync } = require('child_process');

const fileName = process.argv[2];

// Define commands
const commands = [
  `node src/Extensions/FileGenerator/generateApi.js ${fileName}`,
  `node src/Extensions/FileGenerator/generatePage.js ${fileName}`,
  `node src/Extensions/FileGenerator/generateTable.js ${fileName}`,
  `node src/Extensions/FileGenerator/generateColumn.js ${fileName}`,
  `node src/Extensions/FileGenerator/generateIndex.js ${fileName}`,
  `node src/Extensions/FileGenerator/generateFormUtils.js ${fileName}`,
  `node src/Extensions/FileGenerator/generateAddModal.js ${fileName}`,
  `node src/Extensions/FileGenerator/generateEditModal.js ${fileName}`,
  `node src/Extensions/FileGenerator/generateModelForm.js ${fileName}`,
  `node src/Extensions/FileGenerator/generateFilterForm.js ${fileName}`,
  `node src/Extensions/FileGenerator/generateType.js ${fileName}`,
  `node src/Extensions/FileGenerator/generateParamsEnum.js ${fileName}` 
];

// Execute each command sequentially
const runCommands = () => {
  for (const command of commands) {
    try {
      console.log(`Running: ${command}`);
      execSync(command, { stdio: 'inherit' });
      console.log(`${command} executed successfully.\n`);
    } catch (error) {
      console.error(`Error executing ${command}:`, error);
      process.exit(1); // Exit if any command fails
    }
  }
};

runCommands();
