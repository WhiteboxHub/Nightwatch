var locators = require('../locators.json');
var timeOut = locators.globals.waitForConditionTimeout;
function Header(browser) {
    this.browser = browser;
}
Header.prototype= {
    checkForElements: function(){
        this.browser.waitForElementVisible(locators['home.logo'], timeOut);
        this.browser.assert.attributeContains(locators['home.logo'], 'src', 'logo.png');
        this.browser.assert.elementPresent(locators['home.subjectButton']);
        this.browser.assert.elementPresent(locators['home.candidateButton']);
        this.browser.assert.elementPresent(locators['home.loginButton']);
    }
};
module.exports=Header;
