var locators = require('../locators.json');
var timeOut = locators.globals.waitForConditionTimeout;
function MyProfile(browser){
  this.browser = browser;
}
MyProfile.prototype={
  clickOnProfile:function(){
    this.browser.waitForElementVisible(locators['myProfile.viewProfile'], timeOut);
    this.browser.click(locators['myProfile.viewProfile']);
    this.browser.pause(timeOut);
    this.browser.assert.urlContains('website-candidate/studentprofile');
  },
  checkForElements:function(){
    this.browser.assert.elementPresent(locators['myProfile.addPhoto']);
    this.browser.assert.elementPresent(locators['myProfile.firstName']);
    this.browser.assert.elementPresent(locators['myProfile.lastName']);
    this.browser.assert.elementPresent(locators['myProfile.emailAddress']);
    this.browser.assert.elementPresent(locators['myProfile.checkBox']);
    this.browser.assert.elementPresent(locators['myProfile.saveChanges']);
  }
};
module.exports=MyProfile;
