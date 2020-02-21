import {render, fireEvent} from '@testing-library/react'
import React from 'react'
import Name from './Name'
jest.mock('NameService')

it('should exist', () => {
	expect(render(<Name />)).not.toBeNull()
})



it('should display entered name', () => {
	const {getByLabelText} = render(<Name />)
	const nameinput = getByLabelText(/Name/)
	fireEvent.change(nameinput, {
	  target: {
		  value: 'Stein'
		}
	})
	expect(getByLabelText(/Name/).value).toBe('Stein')
})


it('should submit name', () => { 
	const {getByLabelText, getByTestId} = render(<Name />)
	const nameinput = getByLabelText(/Name/)
	fireEvent.change(nameinput, {
	  target: {
		  value: 'Stein'
		}
	})
	const submit = getByTestId('submit')
	fireEvent.click(submit)
	//expect(mockFunc).toHaveBeenCalled()
	expect(getByLabelText(/Name/).value).toBe('Stein')
})