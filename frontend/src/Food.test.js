import React from 'react';
import selectEvent from "react-select-event"
import { render, fireEvent } from '@testing-library/react';
import Food from './Food'


it('should exits' , () => {
	expect(render(<Food />)).not.toBeNull()
 })



it('should have selecte value 2' , async () => {
	const {getByLabelText,getByRole} = render(<Food />)
	await selectEvent.select(getByLabelText("Food"), "2");
	expect(getByRole("form")).toHaveFormValues({ food: "2" })
 })