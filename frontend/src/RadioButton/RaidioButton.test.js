import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import RadioButton from './RadioButton'

it('should exist', () => {
	expect(render(<RadioButton />)).not.toBeNull()
})

it('should  devliver radiobuttons where  option1 false and  option2 true ', () => {
	const {getByLabelText} = render(<RadioButton />)
	const option1 = getByLabelText('Option 1')
	const option2 = getByLabelText('Option 2')
	expect(option1.checked).toBeTruthy()
	expect(option2.checked).toBeFalsy()
	fireEvent.click(option2)
	expect(option2.checked).toBeTruthy()
	expect(option1.checked).toBeFalsy()
})

 
 
