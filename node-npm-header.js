var jsdom = require('jsdom').jsdom,
    document = jsdom('<html><head></head><body></body></html>'),
    window = document.createWindow(),
    navigator = window.navigator = {},
    DEBUG = false;
navigator.userAgent = 'NodeJs JsDom';
