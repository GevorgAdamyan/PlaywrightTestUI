import { ElementHandle, Locator, Page } from "@playwright/test";
import Base from "./base";

export default class Projects extends Base {
    constructor(page: Page) {
        super(page);
        this.page = page;
    }

    protected selectors = {
        behavioLogo: '[alt="Behavio"]',
        pageHeader: '//h2[text()="Projects"]',
        projectsLink: '[href="/projects"]',
        pricingLink: '[href="/pricing"]',
        myAccountLink: 'My account',
        newProjectBtn: '[href="/new-project"]',
        searchBar: '[name="projects-search"]',
        myAccountTab: '#Settings',
        usernameBox: '#Settings > div:nth-child(1) > div:nth-child(2) > div',
        workspaceBox: '#Settings > div >div:nth-child(2) >div > strong'
    }

    get behavioLogo(): Locator {
        return this.page.locator(this.selectors.behavioLogo)
    }

    get pageHeader(): Locator {
        return this.page.locator(this.selectors.pageHeader)
    }

    get projectsLink(): Locator {
        return this.page.locator(this.selectors.projectsLink)
    }

    get pricingLink(): Locator {
        return this.page.locator(this.selectors.pricingLink)
    }

    get myAccountLink(): Locator {
        return this.page.getByText(this.selectors.myAccountLink)
    }

    get newProjectBtn(): Locator {
        return this.page.locator(this.selectors.newProjectBtn)
    }

    get searchBar(): Locator {
        return this.page.locator(this.selectors.searchBar)
    }

    get myAccountTab(): Locator {
        return this.page.locator(this.selectors.myAccountTab)
    }

    get usernameBox(): Locator {
        return this.page.locator(this.selectors.usernameBox)
    }

    get workspaceBox(): Locator {
        return this.page.locator(this.selectors.workspaceBox)
    }

    async openMyAccountTab(): Promise<void> {
        await this.myAccountLink.click()
    }

    async addNewProject(): Promise<void> {
        await this.newProjectBtn.click();
    }
 }
