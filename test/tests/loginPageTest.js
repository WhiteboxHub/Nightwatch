var LoginPage = require('../pages/LoginPage.js');
var login;
module.exports = {
    'Testing for Login': function (browser) {
        browser.windowMaximize();
        browser.url(browser.launch_url);
        login = new LoginPage(browser);
        login.checkLogin();
        login.setCredentials();
        login.submit();
        browser.end();
    }
};
