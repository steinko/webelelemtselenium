
import {render,fireEvent,screen} from '@testing-library/react'
import React from 'react'
import Flight from './Flight'
import userEvent from '@testing-library/user-event'

it('should exist', () => {
	expect(render(<Flight />)).not.toBeNull()
})

it('should exist', () => {
	const {getByLabelText} = render(<Flight />)
	const from = getByLabelText('From :')
	expect(from).not.toBeNull()
	userEvent.type(from , 'OSL')
	expect(from.value).toBe('OSL')
	const to = getByLabelText('To :')
	userEvent.type(to , 'FRA')
	expect(to.value).toBe('FRA')
})
