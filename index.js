// index.js
const inquirer = require('inquirer');
const chalk = require('chalk');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

const promptText = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters for the logo text (leave empty for no text):',
  },
];

const promptColor = (message) => [
  {
    type: 'input',
    name: 'color',
    message,
    validate: (input) => {
      if (!input) {
        return true;
      }
      return /^(#[0-9A-Fa-f]{6}|[A-Za-z]+)$/i.test(input) || 'Invalid input';
    },
  },
];

const promptShape = {
  type: 'list',
  name: 'shape',
  message: 'Choose a shape for the logo:',
  choices: ['Triangle', 'Circle', 'Square'],
};

(async () => {
  console.log(chalk.bold('Logo Generator'));

  const { text } = await inquirer.prompt(promptText);
  const { color: textColor } = await inquirer.prompt(promptColor('Enter the text color (e.g., "red" or "#FF0000"):'));
  const { shape } = await inquirer.prompt(promptShape);
  const { color: shapeColor } = await inquirer.prompt(promptColor(`Enter the ${shape.toLowerCase()} color:`));

  const selectedShape = new (eval(shape))(shapeColor);
  const svgContent = selectedShape.render();

  const fileName = 'logo.svg';
  fs.writeFileSync(fileName, svgContent);

  console.log(chalk.green(`Generated ${fileName}`));
})();
