// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What was your motivation for this project?",
        name: "Motivation"
    },
    {
        type: "input",
        message: "Why did you build this project?",
        name: "Why"
    },
    {
        type: "checkbox",
        choices: ["Efficiency", "Automation", "Organization", "Performance"],
        name: "Purpose"
    },
    {
        type: "input",
        message: "What problem does it solve?",
        name: "Problem-solving"
    },
    {
        type: "input",
        message: "What did you learn?",
        name: "Learnings"
    },{
        type: "confirm",
        message: "Do you want to add table of contents?",
        name: "Table of Contents?"
    },{
        type: "input",
        message: "What are the steps required to install your project? I.e. step 1, step 2...",
        name: "Purpose"
    },{
        type: "input",
        message: "Provide instructions and examples for use. Reminder: To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README",
        name: "Images and Examples"
    },{
        type: "input",
        message: "Who are your collaborators?",
        name: "Collaborators"
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
        message: "Don't forget to add badges!",
        name: "Badges"
    },{
        type: "input",
        message: "List your product features here",
        name: "Features"
    },{
        type: "input",
        message: "How can others contribute to this project?",
        name: "Contributing"
    },{
        type: "input",
        message: "Don't forget to add badges!",
        name: "Badges"
    }]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

inquirer.prompt(questions)
.then ((data) => {
    const fileName = `READMEFile.json`;
fs.writeFile(fileName, JSON.stringify(data, null, '\t'), (err) => 
err ? console.log(err) : console.log("README created!")
);
})};

writeToFile ();

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

// Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {
//     if (license !== 'None') {
//       return `![GitHub license](https://img.shields.io/badge/license-${license.replace(
//         ' ',
//         '_'
//       )}-blue.svg)`;
//     }
//     return '';
//   }
  
//   // Create a function that returns the license link
//   // If there is no license, return an empty string
//   function renderLicenseLink(license) {
//     if (license !== 'None') {
//       return '\n* [License](#license)\n';
//     }
//     return '';
//   }