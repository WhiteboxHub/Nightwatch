
var locators = require('../locators.json');
var timeOut = locators.globals.waitForConditionTimeout;
function Footer(browser) {
    this.browser = browser;
}
Footer.prototype= {
    checkFooterVisibility: function () {
        this.browser.waitForElementVisible(locators['home.footer'], timeOut);
        this.browser.assert.containsText(locators['home.footer'], 'Innovapath Inc.');
        this.browser.assert.title('Talent Screen');
    }
};
module.exports=Footer;
