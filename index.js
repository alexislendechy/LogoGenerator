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
    choices: [
      'Triangle - Choose a shape color',
      'Circle - Choose a shape color',
      'Square - Choose a shape color',
    ],
  },
];

const shapeColors = {
  'Triangle - Choose a shape color': 'Enter the Triangle color:',
  'Circle - Choose a shape color': 'Enter the Circle color:',
  'Square - Choose a shape color': 'Enter the Square color:',
};

(async () => {
  console.log(chalk.bold('Logo Generator'));

  const answers = await inquirer.prompt(questions);

  const { text, textColor, shape } = answers;
  const selectedShape = shape.split(' - ')[0];
  const shapeColorPrompt = shapeColors[shape];

  const { shapeColor } = await inquirer.prompt([
    {
      type: 'input',
      name: 'shapeColor',
      message: shapeColorPrompt,
    },
  ]);

  const selectedShapeInstance = new (eval(selectedShape))(shapeColor, text); // Pass text to the shape constructor
  selectedShapeInstance.textColor = textColor; // Pass text color to the shape instance
  const svgContent = selectedShapeInstance.render();

  const fileName = 'logo.svg';
  fs.writeFileSync(fileName, svgContent);

  console.log(chalk.green(`Generated ${fileName}`));
})();
