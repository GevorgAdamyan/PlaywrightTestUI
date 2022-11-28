import { Page } from "@playwright/test";
import Login from "./login";
import Projects from "./projects";
import NewProject from "./newProject";
import ImpactTestProject from "./impactTestProject";
import data from "../support/data";



export default class Application {
    protected page: Page;
    login: Login;
    projects: Projects;
    newProject: NewProject;
    impactTestProject: ImpactTestProject;
    static testData = data;

    constructor(page: Page) {
        this.page = page;
        this.login = new Login(page);
        this.projects = new Projects(page);
        this.newProject= new NewProject(page);
        this.impactTestProject = new ImpactTestProject(page);
    }
}
