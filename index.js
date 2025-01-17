// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import jsonToMD from './generatemd.js';
import path from 'path';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the description of your project?",
        name: "Description"
    },
    {
        type: "input",
        message: "What was the purpose of your project?",
        name: "Purpose"
    },
    {
        type: "input",
        message: "What problem does it solve?",
        name: "Problem-solving"
    },
    {
        type: "confirm",
        message: "Do you want to add table of contents?",
        name: "addTableOfContents"
    },{
        type: "input",
        message: "Write your Table of Contents sections here:",
        name: "tableOfContents",
        when: (answers) => answers.addTableOfContents
    },{
        type: "input",
        message: "What are the steps required to install your project?",
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
        message: "Did you use any third party assets that need to be acknowledged? If so, write them here:",
        name: "Learnings"
    },{
        type: "input",
        message: "Did you use any tutorials? If so, credit them here:",
        name: "Tutorials"
    },{
        type: "input",
        message: "What licensing do you want to add?",
        name: "Licensing"
    },{
        type: "input",
        message: "What is your GitHub username?",
        name: "GitHub_Username"
    },{
        type: "input",
        message: "What is your email?",
        name: "Email"
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
    // fs.writeFile(fileName, JSON.stringify(data, null, '\t'), (err) => 
    // err ? console.log(err) : console.log("README created!"));
};


// TODO: Create a function to initialize app

// converting the json file to a md file --
function init() {
    inquirer.prompt(questions)
    .then((data) => {
    // const mdFileName = `READMEFile.md`;
    // const mdContent = jsonToMD(data);
    // writeToFile(mdFileName, mdContent);
console.log(data);
writeToFile('README.md', jsonToMD({...data}))
});
}
// Function call to initialize app
init();