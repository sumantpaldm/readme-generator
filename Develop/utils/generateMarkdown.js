// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (license = "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)";
  }
  else if (license = "Apache 2.0") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-blue.svg)](https://opensource.org/licenses/MPL-2.0)";
  }
  else if (license = "Mozilla Public License 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }
  else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return '[License](#license)';
  }
  else {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  console.log(license)
  if (license != undefined) {
    return `## License

    This application has ${license} LICENSE`;
  }
  else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  return `# ${data.title}

  ## Description

  ${data.description}

  ${renderLicenseBadge(data.license)}

  ## Table of Content

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * ${renderLicenseLink(data.license)}
  * [Tests](#tests)
  * [Contact](#contact)

  ## Installation

  ${data.installation}

  ## Usage
 
  ${data.usage}

  ## Credits

  ${data.credits}


  ${renderLicenseSection(data.license)}

  ## Tests

  ${data.tests}

  ## Contact
  Feel free to reach me out !!!
  
  GITHUB USERNAME: ${data.github}

  EMAIL: ${data.mail}`;

}

module.exports = generateMarkdown;
