var SignupPage = require('../pages/SignupPage.js');
var LoginPage = require('../pages/LoginPage.js');
var signup;
var login;
module.exports = {
    'Testing Signup Page': function (browser) {
        browser.windowMaximize();
        browser.url(browser.launch_url);
        signup = new SignupPage(browser);
        login = new LoginPage(browser);
        login.checkLogin();
        signup.clickOnSignup();
        signup.giveDetails();
        signup.clickOnCheckBoxes();
        signup.submit();
        browser.end();
    }
};
