function jsonToMD(data) {
    return `
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

    ## Licensing
    ${data.Licensing}

    ## GitHub Username
    ${data.GitHub_Username}

    ## Email
    ${data.Email}`
};

export default jsonToMD;