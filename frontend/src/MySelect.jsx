import React from 'react'
import Select from 'react-select'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const MySelect = () => (
    <label htmlFor= "food">Food
        <Select options={options}  name="food" inputId="food"/>
    </label> 
    )

export default MySelect