import { test as base} from '@playwright/test'
import { LoginPage } from '../pages/login.page'

export const test = base.extend<{loginPage: LoginPage}> ({
    loginPage: async ({page}, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    }
})