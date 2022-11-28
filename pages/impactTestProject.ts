import { Locator, Page } from "@playwright/test";
import Base from "./base";

export default class ImpactTestProject extends Base {
    constructor(page: Page) {
        super(page);
        this.page = page
    }

    protected selectors = {
        projectNameField: '//*[@class="container"]/div[1]/div[1]/div[1]/div[1]/div[2]/input',
        videoField: 'input[type="file"]',
        uploadVideoBtn: '//*[text()="Upload your video ad here"]',
        categoryField: '//*[text()="Choose Product Category"]',
        foodDelivery: '//*[@id="Category"]/div[2]/div[2]//*[text()="Food Delivery"]',
        firstCompetitor: '#competitorInput_0',
        secondCompetitor: '#competitorInput_1',
        competitorListSuggested: '#competitorInput > div > div:nth-child(2)',
        competitor: 'label:nth-child',
        continueBtn: '//*[text()="Continue"]',
        popUp: '#PopupModal > .container ',
        continueToSummaryBtn: '//button[text()="Continue to summary"]',
        confirmBtn: '//button[text()="Confirm"]',
        videoFrame: '//*/div[2]/iframe',
        uploadAnotherVideoBtn: '//button[text()="Upload another video"]'
    }

    private get projectNameField(): Locator {
        return this.page.locator(this.selectors.projectNameField)
    }

    private get videoField(): Locator {
        return this.page.locator(this.selectors.videoField)
    }

    private get categoryField(): Locator {
        return this.page.locator(this.selectors.categoryField)
    }

    private get foodDelivery(): Locator {
        return this.page.locator(this.selectors.foodDelivery)
    }

    private get firstCompetitor(): Locator {
        return this.page.locator(this.selectors.firstCompetitor)
    }

    private get secondCompetitor(): Locator {
        return this.page.locator(this.selectors.secondCompetitor)
    }

    private get competitorListSuggested(): Locator {
        return this.page.locator(this.selectors.competitorListSuggested)
    }

    private get videoFrame(): Locator {
        return this.page.locator(this.selectors.videoFrame)
    }

    get uploadAnotherVideoBtn(): Locator {
        return this.page.locator(this.selectors.uploadAnotherVideoBtn)
    }

    private get continueBtn(): Locator {
        return this.page.locator(this.selectors.continueBtn)
    }

    async insertProjectName(projectName: string): Promise<void> {
        await this.type(this.projectNameField, projectName)
    }

    async selectCategory(category: Locator): Promise<void> {
        await this.categoryField.click();
        await category.click();
    }

    async selectCompetitor(competitor: Locator, index: number) {
        await competitor.click()
        await this.competitorListSuggested
            .locator(`${this.selectors.competitor}(${index})`)
            .click()
    }

    async uploadVideo(fileName: string): Promise<void> {
        await this.page.setInputFiles(this.selectors.videoField, fileName)
        await this.videoFrame.waitFor();
    }
}
