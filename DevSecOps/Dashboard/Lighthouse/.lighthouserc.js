module.exports = {
    ci: {
        collect: {
            settings: { chromeFlags: '--disable-gpu --no-sandbox --disable-dev-shm-usage --ignore-certificate-errors --skip-audits redirects-http' },
            url: ['url1..'],
            chromePath: false,
            // Wait up to 500s for the page to load
            maxWaitForLoad: 500000,
            throttlingMethod: "devtools"
        },
        // assert: {
        //   // assert options here
        // },
        upload: {
            target: 'lhci',
            serverBaseUrl: '......',
            token: '<build token>',
            // upload options here
        },
        // server: {
        //   // server options here
        // },
        // wizard: {
        //   // wizard options here
        // },
    },
};


// ❯ lhci wizard

