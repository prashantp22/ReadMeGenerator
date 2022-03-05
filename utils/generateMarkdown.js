function generateMarkdown(data) {
    return `
  #${data.project}
    
  <p align="center">
    <img src="https://img.shields.io/badge/license-${data.license}-blue"/>
  </p>
    
  ## Description
  ${data.description}
    
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
    
    
  ## License
  ![badge](https://img.shields.io/badge/license-${data.license}-blue)
    
  This project uses the ${data.license} license.
    

    
  ## Questions
  Have any questions, comments, or concerns?
    
  Check me out on GitHub: [${data.username}](https://github.com/${data.username})
    
  Email me at: [${data.email}](${data.email})
  `
  }
  
  module.exports = generateMarkdown;