var MyProfile = require('../pages/MyProfile.js');
var LoginPage = require('../pages/LoginPage.js');
var login;
var profile;
var buttons;
module.exports = {
    'Testing for MyProfile': function (browser) {
        browser.windowMaximize();
        browser.url(browser.launch_url);
        login = new LoginPage(browser);
        login.checkLogin();
        login.setCredentials();
        login.submit();
        profile = new MyProfile(browser);
        profile.clickOnProfile();
        profile.checkForElements();
        browser.end();
    }
};
