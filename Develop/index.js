// TODO: Include packages needed for this application
// Packages that need to be connected in order to run this application
const inquirer = require('inquirer');
const fs = require('fs');
// 
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
// Array of questions to ask user about their project/application
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What do you want to name your project?',
        validate: projectTitleInput => {
            if (projectTitleInput) {
                return true;
            } else {
                console.log('Please name your project.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Please Describe your project.',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description for your project.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'Provide instructions to users on how to install your application.',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please enter installation instructions for your project.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Please provide instructions on how to use your application.',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please provide instructions on how to use your application.');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'License',
        message: 'What license will you be using for this project?',
        choices: ['MIT', 'none', 'Apache 2.0', 'boost license 1.0']
    },
    {
        type: 'input',
        name: 'Contributing',
        message: 'How can users contribute to your project?',
        validate: contributeInput => {
            if (contributeInput) {
                return true;
            } else {
                console.log('Please provide information on how developers can contribute to your project.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'How can developers test your application?',
        validate: testingInput => {
            if (testingInput) {
                return true;
            } else {
                console.log('Please provide instructions on how developers can test your application.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Github username',
        message: 'Enter your Github username.',
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log('Please enter your Github username.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Email',
        message: 'Enter your email address.',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email address.');
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            console.log(err);
        else (
            console.log("Your README.md file has been created.")
        )
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userAnswers) {
        console.log(userAnswers)
        writeToFile("README.md", generateMarkdown(userAnswers));
    });
};

// Function call to initialize app
init();
