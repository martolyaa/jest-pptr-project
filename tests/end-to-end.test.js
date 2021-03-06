import HomePage from "../pages/HomePage";
import TopBar from "../pages/components/TopBar";
import LoginPage from "../pages/LoginPage";
import FeedbackPage from "../pages/FeedbackPage";

import { username, password, timeout } from "../config";

describe('End-to-end Test', () => {
    let homePage;
    let feedbackPage;
    let loginPage
    let topBar;

    beforeAll(async () => {
        jest.setTimeout(timeout);
        homePage = new HomePage();
        loginPage = new LoginPage();
        feedbackPage = new FeedbackPage();
        topBar = new TopBar();
    });

    it('should load homepage', async () => {
        await homePage.visit();
        await homePage.isNavbarDisplayed();
    });

    it('should submit feeadback', async () => {
        await homePage.clickFeedbackLink();
        await feedbackPage.isFeedbackFormDisplayed();
        await feedbackPage.submitFeedback(
            "Johny Tha Sales", 
            "john@email.com", 
            "subject", 
            "Here comes your lohg message"
            );
    });

    it('should login to application', async () => {
        await homePage.visit();
        await topBar.isTopBarDisplayed();
        await topBar.clickSigninButton();
        await loginPage.isLoginFormDisplayed();
        await loginPage.login(username, password);
    });
});