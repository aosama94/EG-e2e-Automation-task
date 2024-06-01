const { defineConfig } = require('cypress');
const fs = require('fs');

module.exports = defineConfig({
    viewportWidth: 1920,
    viewportHeight: 1080,
    chromeWebSecurity: false,
    env: {
        egFile: 'task.html',
        grepFilterSpecs: true,
        grepOmitFiltered: true,
    },
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
            require('@cypress/grep/src/plugin')(config);

            on('task', {
                readFile(filename) {
                    return fs.readFileSync(filename, 'utf8');
                },
            });
            return config;
        },
        watchForFileChanges: false,
    },
});
