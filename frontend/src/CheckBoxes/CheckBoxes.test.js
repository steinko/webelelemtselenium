import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CheckBoxes from './CheckBoxes'

const OPTIONS = ["One", "Two", "Three"];

it('should exist', () => {
	expect(render(<CheckBoxes  />)).not.toBeNull()
})

it('should  devliver check boxes where option1 false and  option2 true ', () => {
	const {getByLabelText} = render(<CheckBoxes />)
	const option1 = getByLabelText('One')
	const option2 = getByLabelText('Two')
	expect(option1.checked).toBeFalsy()
	expect(option2.checked).toBeFalsy()
	fireEvent.click(option2)
	expect(option2.checked).toBeTruthy()
	expect(option1.checked).toBeFalsy()
})
 

 
