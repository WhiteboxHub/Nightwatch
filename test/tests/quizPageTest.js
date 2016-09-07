var Quiz = require('../pages/QuizPage.js');
var LoginPage = require('../pages/LoginPage.js');
var quiz;
var login;
module.exports = {
    'Testing for Quiz': function (browser) {
        browser.windowMaximize();
        browser.url(browser.launch_url);
        quiz = new Quiz(browser);
        login = new LoginPage(browser);
        login.checkLogin();
        login.setCredentials();
        login.submit();
        quiz.clickOnNewChallenge();
        quiz.checkElements();
        browser.end();
    }
};
