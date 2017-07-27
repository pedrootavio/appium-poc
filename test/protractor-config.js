exports.config = {
    seleniumAddress: 'http://localhost:4723/wd/hub',

    specs: ['./e2e/**/*.spec.js'],

    // Reference: https://github.com/appium/sample-code/blob/master/sample-code/examples/node/helpers/caps.js
    capabilities: {
        platformName: 'android',
        platformVersion: '5.1',
        deviceName: 'lg g3',
        browserName: "",
        autoWebview: true,
        //CHANGE THIS TO YOUR ABSOLUTE PATH
        app: '/home/pedro/systems_development/workspace/ionic/appium-poc/appiumPoc/platforms/android/build/outputs/apk/android-debug.apk'
        //newCommandTimeout: 60
    },

    jasmineNodeOpts: {
        showColors: true
    },
    
    baseUrl: 'http://192.168.56.101:8080',

    // configuring wd in onPrepare
    // wdBridge helps to bridge wd driver with other selenium clients
    // See https://github.com/sebv/wd-bridge/blob/master/README.md
    onPrepare: function () {
        var wd = require('wd'),
            protractor = require('protractor'),
            wdBridge = require('wd-bridge')(protractor, wd);
        wdBridge.initFromProtractor(exports.config);
    }
};
