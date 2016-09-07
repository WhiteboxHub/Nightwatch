var locators = require('../locators.json');
var timeOut = locators.globals.waitForConditionTimeout;
function Quiz(browser) {
    this.browser = browser;
}
Quiz.prototype = {
    clickOnNewChallenge: function () {
        this.browser.useXpath();
        this.browser.waitForElementVisible(locators['quiz.newChallenge'], timeOut);
        this.browser.click(locators['quiz.newChallenge']);
        this.browser.pause(timeOut);
        this.browser.assert.urlContains('take-challange-quiz');
        this.browser.useCss();
    },
    checkElements: function () {
        this.browser.assert.elementPresent(locators['quiz.logo1']);
        this.browser.assert.elementPresent(locators['quiz.tryChallenge']);
        this.browser.assert.elementPresent(locators['quiz.selectQuiz']);
        this.browser.assert.elementPresent(locators['quiz.chooseQuizType']);
        this.browser.assert.elementPresent(locators['quiz.downArrow']);
        this.browser.click(locators['quiz.chooseQuizType']);
        this.browser.pause(timeOut);
        this.browser.useXpath();
        this.browser.assert.elementPresent(locators['quiz.choiceQuiz']);
        this.browser.assert.elementPresent(locators['quiz.codingQuiz']);
        this.browser.assert.elementPresent(locators['quiz.vedioQuiz']);
        this.browser.useCss();
    }
};
module.exports = Quiz;