// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license.replace(
      ' ',
      '_'
    )}-blue.svg)`;
  }
  return '';
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return '\n* [License](#license)\n';
  }
  return '';
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `* This project is licensed under the ${license} license:`;
  } else {
    return '';
  }
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  const toc = data.tableofContents && data.tableofContents.length > 0
    ? `## Table of Contents
${data.tableofContents.map(item => `- [${item}](#${item.toLowerCase()})`).join('\n')}`
    : '';

  return `
  # ${data.Title}

  ${toc}

  ## Description
  * ${data.Description}

  ## Installation
  * ${data.Installation}

  ## Usage
  * ${data.Usage}

  ## Contributing
  * ${data.Contributing}

  ## Tests
  * ${data.Tests}

  ## Questions
  * If you have questions, please reach out to [${data.Email}](mailto:${data.Email})
  * You can also find me on GitHub: [${data.GitHubUsername}](https://github.com/${data.GitHubUsername}).

  ## Licensing
  ${renderLicenseSection(data.License)}
  ${renderLicenseBadge(data.License)}
  ${renderLicenseLink(data.License)}
  `;
}

export default generateMarkdown;