const inquirer = require('inquirer');
const chalk = require('chalk');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters for the logo text (leave empty for no text):',
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter the text color (e.g., "red" or "#FF0000"):',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape for the logo:',
    choices: ['Triangle', 'Circle', 'Square'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter the shape color:',
  },
];

(async () => {
  console.log(chalk.bold('Logo Generator'));

  const answers = await inquirer.prompt(questions);

  const { text, textColor, shape, shapeColor } = answers;

  const selectedShape = new (eval(shape))(shapeColor);
  const svgContent = selectedShape.render();

  const fileName = 'logo.svg';
  fs.writeFileSync(fileName, svgContent);

  console.log(chalk.green(`Generated ${fileName}`));
})();
