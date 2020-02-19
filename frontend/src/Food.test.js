import React from 'react';
import selectEvent from "react-select-event"
import { render, fireEvent } from '@testing-library/react';
import Food from './Food'

jest.mock("react-select", () => ({ options, value, onChange }) => {
  function handleChange(event) {
    const option = options.find(
      option => option.value === event.currentTarget.value
    );
    onChange(option);
  }
  return (
    <select data-testid="select" value={value} onChange={handleChange}>
      {options.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
});


it('should exits' , () => {
	expect(render(<Food />)).not.toBeNull()
 })



it('should have selecte value Fish' , async () => {
	const {getByText} = render(<Food />)
	await fireEvent.click(getByText("Fish"))
	expect(getByText("Fish")).not.toBeNull()
 })