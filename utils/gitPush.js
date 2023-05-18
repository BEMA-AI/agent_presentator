const git = require('simple-git');
const path = require('path');

// The GitHub repository URL
const remote = 'https://github.com/username/repo';

module.exports = function(presentationPath) {
    return new Promise((resolve, reject) => {
        git()
            .add(presentationPath)
            .commit('New presentation')
            .push(remote, 'master', (err) => {
                if (err) {
                    console.error(`git push error: ${err}`);
                    reject(err);
                }
                console.log('Pushed to GitHub!');
                
                // Resolve with the URL to the presentation on GitHub Pages
                let filename = path.basename(presentationPath);
                resolve(`https://bema-ai.github.io/agent-presentator/${filename}`);
            });
    });
};
