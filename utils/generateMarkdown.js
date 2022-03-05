function generateMarkdown(data) {
    return `
  # ${data.project}
    
  <img src="https://img.shields.io/badge/license-${data.license}-blue"/>
    
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

    
  ## Installation
  ${data.install}

  ## Usage
  ${data.usage} 
    
  ## License
  ![badge](https://img.shields.io/badge/license-${data.license}-blue)
    
  ${data.license} license was used for this project. 

  ## Contributing
  ${data.contribute}

  ## Tests
  ${data.tests}
    
  ## Questions
  If you have any questions, comments, or concerns please email me at address provided below.
    
  Check me out on GitHub: [${data.username}](https://github.com/${data.username})
    
  Email me at: [${data.email}](${data.email})
  `
  }
  
  module.exports = generateMarkdown;