// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateSVG = require('./lib/svg');

// array of user prompts
const prompts = [
    {
      type: 'input',
      message: 'Please enter the text you would like for your logo (up to 3 characters):',
      name: 'text',
    },
    {
      type: 'input',
      message: 'Please enter the color you would like for your logo text (color keyword OR hexadecimal number):',
      name: 'textColor',
    },
    {
      type: 'list',
      message: 'Please choose a shape for your logo:',
      choices: ["Circle", "Triangle", "Square"],
      name: 'shape',
    },
    {
        type: 'input',
        message: 'Please enter the color you would like for your logo shape (color keyword OR hexadecimal number):',
        name: 'shapeColor',
      },
  ]
  
// function to write SVG file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateSVG(data), (err) => {
        err ? console.log(err) : console.log('Generated logo.svg');
    })
}

// function to initialize app
function init() {
    inquirer
    .prompt(prompts)
    .then((data) => {
        const fileName = `./examples/${data.text.toLowerCase()}.${data.shape.toLowerCase()}.logo.svg`;
        writeToFile(fileName, data);
    });
}
// call function
init();
