// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown.js')





// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is name of your project? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter the name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide some description about the project? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter the description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Specify the installation requirements?',
        default: 'none',

    },

    {
        type: 'input',
        name: 'usage',
        message: 'Spicify the application usage instructions? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter the usage instruction!');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'credits',
        message: 'Specify the Names of collaborators?(Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter the names!');
                return false;
            }
        }

    },
    {
        type: 'confirm',
        name: 'licenseConfirm',
        message: 'Do you want to add a spicific license?',
        default: true,
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Specify the liscence of the application?',
        choices: ['MIT', 'Apache 2.0', 'Mozilla Public License 2.0'],
        when: ({ licenseConfirm }) => licenseConfirm,
    },


    {
        type: 'input',
        name: 'tests',
        message: 'Specify the information about the tests?',
        default: 'none'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your git hub address? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your Github address!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'mail',
        message: 'Enter your E-MAIL address? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter the Email!');
                return false;
            }
        }
    },


];




// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data);
};



// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions).then(responses => {
        writeToFile("README.md", generateMarkdown(responses));

        console.log(`========================================================
                        DONE
=========================================================`)
    });
}

// Function call to initialize app
init()







