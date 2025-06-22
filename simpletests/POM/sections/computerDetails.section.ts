import { Page } from '@playwright/test'

export default class ComputerDetails {
    private readonly page: Page

    constructor(page: Page) {
        this.page = page;
    }
    get computerName() {
        return this.page.getByLabel("Computer Name");
    }
    get introDate() {
        return this.page.getByLabel("Introduced Date");
    }
    get discontinuedDate() {
        return this.page.getByLabel("Discontinued Date");
    }
    get company() {
        return this.page.getByLabel("Company");
    }


    async fillComputerDetails({
        computer,
        introDate,
        discontinuedDate,
        company,
    }: details) {
        await this.computerName.fill(computer);
        await this.introDate.fill(introDate);
        await this.discontinuedDate.fill(discontinuedDate);
        await this.company.fill(company);
    }

}

export interface details {
  computer: string;
  introDate: string;
  discontinuedDate: string;
  company: string;
}