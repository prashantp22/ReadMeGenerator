const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown.js');


const questions = () =>
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'username',
            message: 'Whats your Github username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
        {
            type: 'input',
            name: 'project',
            message: 'What is your projects name?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a brief description of your project.',
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What License would you like your project to have?',
            choices: ['MIT', 'BSD', 'Apache', 'GNU', 'Eclipse', 'Mozilla']
        },
    ]);

    // TODO: Create a function to write README file
    function writeToFile(fileName, data) {
        console.log(fileName, data);
        fs.writeFile(fileName, data, "utf8", (err) => {
            if (err) {
                throw err;
            }
        });
    }

    async function init() {
   
    
        const answers = await questions();
        console.log(answers);
    
        generateMarkdown(answers);
    
        writeToFile("README.md", generateMarkdown(answers));
    }

    init();