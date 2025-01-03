// TODO: Include packages needed for this application
import inquirer from inquirer;

// TODO: Create an array of questions for user input
const questions = [{
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
    type: "checkbox",
    choices: ["Efficiency", "Automation", "Organization", "Performance", "Diagnostics", "Education"],
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
},


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
