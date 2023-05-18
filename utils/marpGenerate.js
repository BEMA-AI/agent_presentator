const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

module.exports = function(marpGenerate) {
    return new Promise((resolve, reject) => {
        // Create a unique file name for each presentation
        const filename = Date.now().toString();
        const inputPath = path.resolve(__dirname, `../${filename}.md`);
        const outputPath = path.resolve(__dirname, `../${filename}.html`);

        // Write the markdown text to the input file
        fs.writeFileSync(inputPath, marpGenerate);

        // Generate the presentation
        const command = `marp ${inputPath} -o ${outputPath}`;
        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                reject(error);
            }

            console.log(`stdout: ${stdout}`);
            console.error(`stderr: ${stderr}`);

            // Resolve with the path of the output file
            resolve(outputPath);
        });
    });
};
