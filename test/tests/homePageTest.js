var HomePage = require('../pages/HomePage.js');
var Header = require('../templates/Header.js');
var Footer = require('../templates/Footer.js');
var header;
var footer;
var home;
module.exports = {
    'Testing Header in HomePage': function (browser) {
        browser.windowMaximize();
        browser.url(browser.launch_url);
        header = new Header(browser);
        header.checkForElements();
    },
    'Testing for Buttons in HomePage': function (browser) {
        home = new HomePage(browser);
        home.clickOnSubjectMenu();
        home.clickOnCandidate();
        home.clickOnLogo();
        home.clickOnBrowseSubject();
        home.clickOnLogo();
    },
    'Testing for FooterPrsence': function (browser) {
        footer = new Footer(browser);
        footer.checkFooterVisibility();
    },
    'Testing for Body': function (browser) {
        home = new HomePage(browser);
        home.checkForImages();
        home.checkCarousel();
    }
};