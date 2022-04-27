// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## license:
  [![license](http://img.shields.io/badge/license-${data.License}-blue)](https://shields.io)

  ## Table of contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contribution](#Contributing)
  - [Test](#Tests)

  ## Description:
  ${data.Description}

  ## Installation:
  ${data.Installation}

  ## Usage:
  ${data.Usage}

  ## License:
  ${data.License}

  ## Contribution:
  ${data.Contributing}

  ## Test:
  ${data.Tests}

  ## Personal Info:
  - Github: [${data.Githubusername}](https://github.com/${data.Githubusername})
  - Email: ${data.Email} `;
;
}

module.exports = generateMarkdown;
