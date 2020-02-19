import {render,fireEvent,screen} from '@testing-library/react'
import React from 'react'
import CarSelect from './CarSelect'
import userEvent from '@testing-library/user-event'

it('should exist', () => {
	expect(render(<CarSelect />)).not.toBeNull()
})

xit('should have selected Volvo', () => {
	const {getByLabelText,getByText} = render(<CarSelect />)
	 const select = getByLabelText(/Choose/)
	 const choosed = getByText('Audi')
	 expect(choosed.text).toBe('Audi')
	 fireEvent.click(choosed)
	 fireEvent.change(choosed)
	 expect(select.value).toBe('Audi')

})