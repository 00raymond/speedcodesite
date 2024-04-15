const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

// Path to the scripts directory
const scriptsDir = path.join(__dirname, 'compile', 'scripts');

// Function to run Docker containers for different languages
exports.runDockerContainer = (language, code) => {
    return new Promise((resolve, reject) => {
        const fileName = getFileName(language);
        const filePath = path.join(scriptsDir, fileName);

        // Write the code to the appropriate script file
        fs.writeFileSync(filePath, code);

        // Generate the Docker run command
        const cmd = buildDockerCommand(language, filePath);

        // Execute the Docker command
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                console.error('Docker execution error:', stderr);
                reject(stderr || error.message);
            } else {
                resolve(stdout.trim());
            }
        });
    });
};

// Function to get the file name based on the language
function getFileName(language) {
    switch (language.toLowerCase()) {
        case 'csharp':
            return 'script.cs';
        case 'java':
            return 'script.java';
        case 'python':
            return 'script.py';
        default:
            throw new Error('Unsupported language');
    }
}

// Function to build the Docker command
function buildDockerCommand(language, filePath) {
    const dockerImageName = `${language}-compiler`;  // Assuming you've built and tagged Docker images accordingly
    return `docker run --rm -v "${scriptsDir}:/app" ${dockerImageName} /app/${path.basename(filePath)}`;
}

