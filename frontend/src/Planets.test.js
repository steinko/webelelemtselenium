import {render,fireEvent,screen} from '@testing-library/react'
import React from 'react'
import Planets from './Planets'

it('should exist', () => {
	expect(render(<Planets />)).not.toBeNull()
})

xit('should have selected Volvo', () => {
	const {getByLabelText,getByText} = render(<Planets />)
	 const select = getByLabelText(/Choose/)
	 const choosed = getByText('Mars')
	 fireEvent.click(choosed)
	 fireEvent.change(choosed)
	 expect(select.value).toBe('Mars')

})