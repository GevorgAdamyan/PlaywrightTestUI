import { Locator, Page } from "@playwright/test";
import Base from "./base";

export default class NewProject extends Base {
    constructor(page: Page) {
        super(page);
        this.page = page;
    }

    protected selectors = {
        conceptTestTab: '//*[text()="Concept test"]',
        videoPreTest: '//*[text()="Video pre-test"]',
        impactTest: '//*[text()="Impact test"]',
        setUpBtn: 'button > span',
        newProjectInfo: '.container'
    }

    get conceptTestTab(): Locator {
        return this.page.locator(this.selectors.conceptTestTab)
    }

    get videoPreTest(): Locator {
        return this.page.locator(this.selectors.videoPreTest)
    }

    get impactTest(): Locator {
        return this.page.locator(this.selectors.impactTest)
    }

    private get setUpBtn(): Locator {
        return this.page.locator(this.selectors.setUpBtn)
    }

    async setUpProject(projectType: Locator): Promise<void> {
        await this.page.waitForTimeout(1000);
        await projectType.click();
        await this.setUpBtn.click();
    }
}
