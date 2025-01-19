function jsonToMD(data) {
    return `
    ## Title
    ${data.Title}

    ## Description
    ${data.Description}

    ## Purpose
    ${data.Purpose}

    ## Installation
    ${data.Installation}

    ## Usage
    ${data.Usage}

    ## Table of Contents
    ${data.tableOfContents}

    ## Contributing
    ${data.Contributing}

    ## License
    ${data.License}

    ## GitHub Username
    ${data.GitHub_Username}

    ## Email
    ${data.Email}`
};

export default jsonToMD;