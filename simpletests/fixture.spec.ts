import { expect, test as base } from '@playwright/test';

let x: number;

type NewFixture = 
{
  fixOne: any,
  fixTwo: any
}

const test = base.extend<NewFixture>({
  fixOne: async ({}, use) => {
    const fixOne = undefined;
    x = 1;
    await use (fixOne)
  }
})

test.skip('Basic one', async ({fixOne})=> {
  expect(x).toBe(1);
})




test.skip('Task 19: Shadow DOM Interaction', async({page})=> {
  await page.goto('https://the-internet.herokuapp.com/shadowdom');

  const firstSpan = page.locator('my-paragraph').first().locator('span');
  const list = page.locator('my-paragraph').last().getByRole('listitem');

  await expect(firstSpan).toHaveText('Let\'s have some different text!');
  await expect(list.first()).toHaveText('Let\'s have some different text!')
  await expect(list.last()).toHaveText('In a list!')
 
})





test.skip('Task 18: dynamic loading shows “Hello World!”', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/dynamic_loading/2');
  await page.getByRole('button', { name: 'Start' }).click();

  await page.locator('#loading').waitFor({ state: 'hidden' });

  const hello = page.locator('#finish h4');
  await expect(hello).toHaveText('Hello World!');
});
