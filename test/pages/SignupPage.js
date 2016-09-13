
var locators = require('../locators.json');
var timeOut = locators.globals.waitForConditionTimeout;
function SignupPage(browser) {
    this.browser = browser;
}
SignupPage.prototype={
    clickOnLogout:function(){
        this.browser.waitForElementVisible(locators['signup.logoutButton'], timeOut);
        this.browser.click(locators['signup.logoutButton']);
    },
    clickOnSignup:function(){
        this.browser.waitForElementVisible(locators['signup.signupButton'], timeOut);
        this.browser.click(locators['signup.signupButton']);
        this.browser.assert.attributeContains(locators['signup.signupButton'], 'href', '#/sign-up')
    },
    giveDetails:function(){
        this.browser.waitForElementVisible(locators['signup.emailIDField'], timeOut);
        this.browser.setValue('input[id=emailAddress]', 'p.venugopalarao222@gmail.com');
        this.browser.assert.elementPresent(locators['signup.passwordField']);
        this.browser.setValue('input[id=ePassword]', 'Training@');
        this.browser.assert.elementPresent(locators['signup.confirmPasswordField']);
        this.browser.setValue('input[id=mPassword]', 'Training@');
    },
    clickOnCheckBoxes:function(){
        this.browser.click(locators['signup.employeeCheckBox']);
        this.browser.click(locators['signup.termsCheckBox']);
    },
    submit:function(){
        this.browser.waitForElementVisible(locators['signup.createAccount'], timeOut);
        this.browser.click(locators['signup.createAccount']);
    }
};
module.exports=SignupPage;
