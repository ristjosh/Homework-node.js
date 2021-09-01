// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return "![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br />";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  return `<h1 align="center">${data.projectTitle} 👋</h1>

  # Description
    ${data.description}

  # Table of Contents
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
  
  # Installation
    ${data.installation}

  # Usage
    ${data.usage}

  # License
    ${data.license}
    ${renderLicenseBadge()}

  # Contribution
    ${data.contributing}

  # Tests
    ${data.tests}

  # Questions
    ${data.questions}
    
    This is my GitHub profile ID!
    ${data.username}
    Feel free to contact me here!
    ${data.email}
`;
}

module.exports = generateMarkdown;
