import HomePage from "../pages/HomePage";
import TopBar from "../pages/components/TopBar";
import LoginPage from "../pages/LoginPage";
import FeedbackPage from "../pages/FeedbackPage";

describe('End-to-end Test', () => {
    let homePage;
    let feedbackPage;
    let loginPage
    let topbar;

    beforeAll(async () => {
        jest.setTimeout(15000);
        homePage = new HomePage();
        loginPage = new LoginPage();
        feedbackPage = new FeedbackPage();
        topbar = new TopBar();
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
            "Here comes your lohg message");
    })
});