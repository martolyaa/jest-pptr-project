import HomePage from "../pages/HomePage";
import TopBar from "../pages/components/TopBar";
import LoginPage from "../pages/LoginPage";
import FeedbackPage from "../pages/FeedbackPage";

describe('Example', () => {
    let homepage;
    let feedbackPage;
    let topbar;

    beforeAll(async () => {
        jest.setTimeout(15000);
        homepage = new HomePage();
        feedbackPage = new FeedbackPage();
        topbar = new TopBar();
    });

    it("homepage should work", async () => {
        await homepage.visit();
    });

    it("navbar should be displayed", async () => {
        await homepage.isNavbarDisplayed();
        await topbar.isTopBarDisplayed();
    });

    it("feedback should work", async () => {
        await feedbackPage.visit();
        await feedbackPage.isFeedbackFormDisplayed();
        await feedbackPage.submitFeedback(
            "Johny", 
            "johnyTheSales@gmail.com", 
            "subject", 
            "comment"
            );
        await feedbackPage.wait(5000);
    });
});