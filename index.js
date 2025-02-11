// TODO: Include packages needed for this application
import inquirer from 'inquirer';
// import checkbox from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';
import path from 'path';

// TODO: Create an array of questions for user input
const questions = [
    {   type: "input",
        message: "What is the title of your project?",  
        name: "Title"
    },{
        type: "input",
        message: "What is the description of your project?",
        name: "Description"
    },
    {
        type: "confirm",
        message: "Do you want to add table of contents?",
        name: "addTableOfContents"
    },{
        type: "checkbox",
        message: "Please select the Table of Contents sections you'd like to add",
        name: "tableofContents",
        when: (answers) => answers.addTableOfContents,
        choices: [
            {name: 'Description', value: 'Description'},
            {name: 'Installation', value: 'Installation'},
            {name: 'Usage', value: 'Usage'},
            {name: 'Contributing', value: 'Contributing'},
            {name: 'Tests', value: 'Tests'},
            {name: 'License', value: 'License'},
            {name: 'Questions', value: 'Questions'},
    ]},{
        type: "input",
        message: "How is your project installed?",
        name: "Installation"
    },{
        type: "input",
        message: "Provide usage instructions",
        name: "Usage"
    },{
        type: "input",
        message: "Who are your collaborators and how do others contribute?",
        name: "Contributing"
    },{
        type: "input",
        message: "What licensing do you want to add?",
        name: "License"
    },{
        type: "input",
        message: "How can others test the application?",
        name: "Tests"
    },{
        type: "input",
        message: "What is your GitHub username?",
        name: "GitHubUsername"
    },{
        type: "input",
        message: "What is your email?",
        name: "Email"
    }
];

// logic for Table of Contents
// const toc = tableOfContents.map(`- [${item}](#${item.toLowerCase()})`).join('\n');

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
    // fs.writeFile(fileName, JSON.stringify(data, null, '\t'), (err) => 
    // err ? console.log(err) : console.log("README created!"));
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {

console.log(data);
writeToFile('README.md', generateMarkdown({...data}))
});
}
// Function call to initialize app
init();