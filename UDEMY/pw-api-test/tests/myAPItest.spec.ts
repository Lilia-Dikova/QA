import { test, expect, request } from '@playwright/test'
import { mockTags, mockNewArticle } from '../data/data-api.ts'


test.beforeEach(async ({ page }) => {
    await page.route('*/**/api/tags', async route => {

        await route.fulfill({
            body: JSON.stringify(mockTags)
        })
    })
    await page.goto('https://conduit.bondaracademy.com/')

    const user = {
        email: 'liliqdikowa@gmail.com',
        password: 'ceff04da'
    }

    await page.getByText('Sign in').click();
    await page.getByPlaceholder('Email').fill(user.email);
    await page.getByPlaceholder('Password').fill(user.password)
    await page.getByRole('button', { name: "Sign in" }).click()

})

const BASE_URL = 'https://conduit-api.bondaracademy.com/api';

test('MockApi', async ({ page }) => {

    await page.route('*/**/api/articles?limit=10&offset=0', async route => {
        const response = await route.fetch();
        const responseBody = await response.json();

        responseBody.articles[0].title = 'Me and Marley';
        responseBody.articles[0].description = 'This is fake description';

        route.fulfill({
            body: JSON.stringify(responseBody)
        })
    })

    await expect(page.locator('.navbar-brand')).toHaveText('conduit');

    const articleOne = page.locator('app-article-preview').first()

    await expect(articleOne.getByRole('heading', { level: 1 })).toHaveText('Me and Marley');
    await expect(articleOne.getByRole('paragraph')).toHaveText('This is fake description')

})


test.only('Perform API request', async ({ page, request }) => {




    const response = await request.post(`${BASE_URL}/users/login/`, {
        data: { "user": { "email": "liliqdikowa@gmail.com", "password": "ceff04da" } }
    })

    const responseBody = await response.json()

    const token = responseBody.user.token;

    const articleResponse = await request.post(`${BASE_URL}/articles/`, {
        headers: {
            Authorization: `Token ${token}`
        },

        data: mockNewArticle
    })

    expect(articleResponse.status()).toEqual(201)


    await page.getByText('Global Feed').click();
    await page.getByText(`${mockNewArticle.article.title}`).click();
    await page.locator('.article-meta button').getByText(/Delete Article/).first().click();
    await page.getByText('Global Feed').click();

    await expect(page.locator('app-article-preview h1').first()).not.toContainText(mockNewArticle.article.title)
})


test.only('Intercept Browser API request', async ({ request, page }) => {

    const article = {
        title: 'New article I will delete',
        desciption: 'Describe this article',
        content: 'My article content'

    }


    await page.getByText('New Article', { exact: true }).click()
    await page.getByPlaceholder('Article Title').fill(article.title)
    await page.getByPlaceholder('What\'s this article about?').fill(article.desciption);
    await page.getByPlaceholder('Write your article (in markdown)').fill(article.content);

    await page.getByRole('button', { name: 'Publish Article' }).click();
    const response = await page.waitForResponse(`${BASE_URL}/articles/`);
    const articleResponse = await response.json()


    const slug = articleResponse.article.slug;

    console.log(slug)

    await page.getByText('Home').click()

    await expect(page.locator('app-article-preview h1').first()).toContainText(article.title);

    const loginResponse = await request.post(`${BASE_URL}/users/login/`, {
        data: { "user": { "email": "liliqdikowa@gmail.com", "password": "ceff04da" } }
    })

    const responseBody = await loginResponse.json()

    const token = responseBody.user.token;

    await request.delete(`${BASE_URL}/articles/${slug}`, {
        headers: {
            Authorization: `Token ${token}`
        }
    }
    )


    await page.getByText('Global Feed').click();
    await expect(page.locator('app-article-preview h1').first()).not.toContainText(mockNewArticle.article.title)



})