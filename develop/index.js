// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'Enter project title here'
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Provide a short description explaining the what, why, and how of your project.'
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'What are the steps required to install your project?'
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Provide instructions and examples for use.'
    },
    {
        type: 'input',
        name: 'License',
        message: 'Provide a license for your project if you have one.'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) =>
        error ? console.log(error) : console.log(data)
    )
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(answers) {
        
    })
}

// Function call to initialize app
init();
