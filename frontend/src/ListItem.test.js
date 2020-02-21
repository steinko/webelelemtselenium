import React from 'react'
import ListItem from './ListItem'
import { render} from "@testing-library/react"



it('should exists', async () => { 
	const key = '1'
	const value = 1
	expect(render(<ListItem id = {key} value= {value} />)).not.toBeNull()

})