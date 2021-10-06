// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter project title here'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err =>
        err ? console.log(err) : console.log(data)
    );
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {

        const fileName = `./README.md`;
        const content = 
    `
# ${answers.title}

# Description
${answers.description}

# Installation 
${answers.installation}


# Usage 
${answers.usage}

    `
    
        writeToFile(fileName, content)
    })
}

// Function call to initialize app
init();
