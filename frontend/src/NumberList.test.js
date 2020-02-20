import React from 'react'
import NumberList from './NumberList'
import { render, fireEvent} from "@testing-library/react"

const numbers = [0,1, 2, 3, 4];

it('should exists', async () => { 
	expect(render(<NumberList numbers={numbers}/>)).not.toBeNull()

})

it('should have a list of numbers', async () => {
	let i
	const {getAllByRole} = render(<NumberList numbers={numbers} />)
	const listElements = getAllByRole('listitem')
	expect(listElements.length).toBe(5)
	for(i=0; i>listElements.length; i++)
	  expect(listElements[i].text).toBe(i)
	  //expect(listElements[i].key).toBe(i)

})