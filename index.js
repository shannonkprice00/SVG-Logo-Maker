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
      validate: function (value) {
        if (value.trim().length > 3) {
          return "You must enter ONLY UP TO 3 characters."
        } else if (value.trim().length < 1) {
          return "You must enter text for your logo."
        }
        return true;
      }
    },
    {
      type: 'input',
      message: 'Please enter the color you would like for your logo text (color keyword OR hexadecimal number):',
      name: 'textColor',
      validate: function (input) {
        const pattern = /^([a-z]+|\#[0-9a-f]{6})$/i;
        if (pattern.test(input)) {
          return true
        } else {
          return "Please enter a valid color (e.g. 'green' or '#2b2b2b')."
        }
      }
    },
    {
      type: 'list',
      message: 'Please choose a shape for your logo:',
      choices: ["Circle", "Triangle", "Square", "Oval", "Rounded-Rectangle"],
      name: 'shape',
    },
    {
        type: 'input',
        message: 'Please enter the color you would like for your logo shape (color keyword OR hexadecimal number):',
        name: 'shapeColor',
        validate: function (input) {
          const pattern = /^([a-z]+|\#[0-9a-f]{6})$/i;
          if (pattern.test(input)) {
            return true
          } else {
            return "Please enter a valid color (e.g. 'green' or '#2b2b2b')."
          }
        }
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
