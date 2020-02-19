import React from 'react'
import MySelect from './MySelect'
import { render, fireEvent} from "@testing-library/react"

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

it('should have a selecetd Chocolate', async () => { 
	const {getByText} = render(<MySelect />)
	await fireEvent.click(getByText("Chocolate"))
	expect(getByText("Chocolate")).not.toBeNull()
	
})