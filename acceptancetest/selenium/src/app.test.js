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

it('should av selected Audi' ,async () => { 
	
	const cars = await driver.findElement(By.id('cars'))
	   const options = await driver.findElement(By.id('audi'))
	   await options.click()
       expect(await cars.getAttribute('value')).toBe('audi')
})

it('should have selected Jupiter' ,async () => { 
	
	const planets = await driver.findElement(By.id('planets'))
	const options = await driver.findElement(By.id('Jupiter'))
	await options.click()
    expect(await planets.getAttribute('value')).toBe('Jupiter')
})

xit('should have selected Fish' ,async () => { 
	
	const food = await driver.findElement(By.id('food'))
	const options = await driver.findElement(By.id('Fish'))
	await options.click()
    expect(await food.getAttribute('value')).toBe('Fish')
})

it('should have a list of numbres ' ,async () => { 
	let i
	const numberList = await driver.findElement(By.id('numberlist'))
	expect(numberList).not.toBeNull()
	const listElement = await numberList.findElements(By.tagName('li'))
	expect(listElement.length).toBe(5)
	for(i=0; i<listElement.length; i++)
	   expect(await listElement[i].getText()).toBe(i.toString())
})


it('should display enterd name' ,async () => { 
	const name = await driver.findElement(By.id('name'))
	name.sendKeys('Stein')
	expect(await driver.findElement(By.id('name')).getAttribute('value')).toBe('Stein')
})

it('should display enterd name' ,async () => { 
	const name = await driver.findElement(By.id('name'))
	name.sendKeys('Stein')
	await driver.findElement(By.id('submit')).click()
	name.clear()
	const value =  await driver.findElement(By.id('name')).getAttribute('value')
	expect(value).toBe('Stein')
})




