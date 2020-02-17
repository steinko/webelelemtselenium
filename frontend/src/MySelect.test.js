import React from 'react'
import selectEvent from "react-select-event"
import MySelect from './MySelect'
import { render } from "@testing-library/react"

it('', async () => { 
	const {getByLabelText,getByRole} = render(<MySelect />)
	await selectEvent.select(getByLabelText("Food"), "Chocolate");
	expect(getByRole("form")).toHaveFormValues({ food: "chocolate" });
})