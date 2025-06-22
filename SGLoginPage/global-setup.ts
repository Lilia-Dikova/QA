import { test } from './fixtures/myFixtures'


  const user = { 
    username: 'lilia.dikova@siteground.com',
    password: 'Ceff04da123'
  }

test('setup login and save state', async ({ page, loginPage }) => {

  await loginPage.goto()
  await loginPage.loginForm.fillFormAndLogin(user);

  await page.waitForSelector('.sg-avatar')
  await page.context().storageState({ path: './loginAuth.json' });
  
  // const storage = await page.context().storageState();
  // fs.writeFileSync('loginAuth.json', JSON.stringify(storage));
});