
var locators = require('../locators.json');
var timeOut = locators.globals.waitForConditionTimeout;
function LoginPage(browser) {
    this.browser = browser;
}
LoginPage.prototype={
    checkLogin:function(){
        this.browser.waitForElementVisible(locators['home.loginButton'], timeOut);
        this.browser.click(locators['home.loginButton']);
        this.browser.pause(timeOut);
        this.browser.assert.urlContains('login');
    },
    setCredentials:function(){
        this.browser.waitForElementVisible(locators['login.userNameField'], timeOut);
        this.browser.setValue(locators['login.userNameField'], 'sudha@gmail.com');
        this.browser.setValue(locators['login.passwordField2'], 'Excellence@123');
        this.browser.pause(timeOut);
    },
    submit:function(){
        this.browser.waitForElementVisible(locators['login.submitButton'], timeOut);
        this.browser.click(locators['login.submitButton']);
        this.browser.pause(timeOut);
        this.browser.assert.urlContains('website-candidate/dashboard');
    }
};
module.exports=LoginPage;
