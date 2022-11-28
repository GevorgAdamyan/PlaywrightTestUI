import { expect, Page, test } from "@playwright/test";
import Application from "../pages/application";

let page: Page;
let App: Application;

test.describe(`Testing Project creation feature (${process.env.ENV_NAME} environment)`, () => {
    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
        App = new Application(page);
    })

    test.beforeEach(async () => {
        await App.login.goTo('/');
        await App.login.doLogin(Application.testData.credentials.testCorrectEmail, Application.testData.credentials.testCorrectPasword);
        await App.projects.addNewProject();
    })

    test.afterEach(async () => {
        await page.reload();
    })

    test.afterAll(async () => {
        await page.close();
    });

    Application.testData.videoFilesPaths.forEach(file => {
        test(`should successfully upload a video with "${file.ext}" extension`, async () => {
            await App.newProject.setUpProject(App.newProject.impactTest);
            await App.impactTestProject.uploadVideo(file.filePath);
            await expect(App.impactTestProject.uploadAnotherVideoBtn).toBeVisible();
        })
    })
})
