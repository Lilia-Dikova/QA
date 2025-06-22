import { test as base } from '@playwright/test';
import { ComputerPage } from '../POM/pages/Computer.page';
import { AddComputerPage } from '../POM/pages/addComputer.page';


export const test = base.extend<{ computersPage: ComputerPage, addComputersPage: AddComputerPage }>({

    computersPage: async ({ page }, use) => {
        await use(new ComputerPage(page))
    },
    addComputersPage: async ({ page }, use) => {
        await use(new AddComputerPage(page))
    }
})
