import getDriver from "./setupTests"
import {getHostName} from "./setupTests"
import {By, Key} from 'selenium-webdriver'

let driver
beforeAll( async () =>  { 
	driver = await getDriver()
	await driver.get(getHostName())
 })

it('should display react app', async () => {
	 const react = await driver.findElement(By.className('App-link'))
	 expect(await react.getText()).toContain('Learn React')
})
