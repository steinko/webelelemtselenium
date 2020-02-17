import getDriver from "./setupTests"
import {getHostName} from "./setupTests"
import {By, Key} from 'selenium-webdriver'

let driver
beforeAll( async () =>  { 
	driver = await getDriver()
	await driver.get(getHostName())
 })

it('should display react app', async () => {
	expect(await driver.findElement(By.className('App'))).not.toBeNull()
})



it('should av selected from desination and to destination' ,async () => {
	const from = await driver.findElement(By.id('from'))
	expect(from).not.toBeNull()
	from.clear()
	from.sendKeys('OSL')
	//expect(from.getText()).toBe('OSL')
	const to = await driver.findElement(By.id('to'))
	to.clear()
	to.sendKeys('FRA')
	//expect(from.getText()).toBe('FRA')
})



