// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return "[![macOS](https://svgshare.com/i/ZjP.svg)](https://svgshare.com/i/ZjP.svg)";
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
  return `# ${data.projectTitle}

  # ${data.description}

  # ${data.installation}

  # ${data.usage}

  # ${data.license}

  # ${data.contributing}

  # ${data.tests}

  # ${data.questions}

  # ${data.username}

  # ${data.email}
    Feel free to contact me here!
  
  # ${renderLicenseBadge()}
`;
}

module.exports = generateMarkdown;