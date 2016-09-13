
var locators = require('../locators.json');
var timeOut = locators.globals.waitForConditionTimeout;
function HomePage(browser) {
    this.browser = browser;
}
HomePage.prototype = {
    clickOnLogo: function() {
        this.browser.waitForElementVisible(locators['home.logo'], timeOut);
        this.browser.click(locators['home.logo']);
        this.browser.pause(timeOut);
        this.browser.assert.urlContains('home');
    },
    clickOnSubjectMenu:function(){
        this.browser.click(locators['home.subjectButton']);
        this.browser.pause(timeOut);
        this.browser.assert.urlContains('website-courses/grid');
    },
    clickOnCandidate:function() {
        this.browser.click(locators['home.candidateButton']);
        this.browser.assert.containsText(locators['home.candidateButton'], 'Candidate');
        this.browser.pause(timeOut);
    },
    clickOnBrowseSubject:function(){
        this.browser.waitForElementVisible(locators['home.browseSubjectsButton'], timeOut);
        this.browser.click(locators['home.browseSubjectsButton']);
        this.browser.pause(timeOut);
        this.browser.assert.elementPresent('#Filter-button');
    },
    checkForImages: function () {
        this.browser.assert.elementPresent(locators['home.image1']);
        this.browser.assert.cssClassPresent(locators['home.image1'], 'parallax-layer');
        this.browser.assert.elementPresent(locators['home.image2']);
        this.browser.assert.cssClassPresent(locators['home.image2'], 'parallax-layer');
    },
    checkCarousel: function () {
        this.browser.useXpath();
        this.browser.click(locators['home.carousel']);
        this.browser.pause(timeOut);
        this.browser.assert.elementPresent('ASP.NET web Forms');
        this.browser.click(locators['home.carouse2']);
        this.browser.pause(timeOut);
        this.browser.assert.elementPresent('Web Services');
        this.browser.click(locators['home.carouse3']);
        this.browser.pause(timeOut);
        this.browser.assert.elementPresent('MongoDB');
        this.browser.useCss();
    }
};
module.exports = HomePage;
