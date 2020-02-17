import React from 'react'
import Select from 'react-select'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const MySelect = () => (
  <form>
    <label htmlFor= "food">Food</label> 
    <Select options={options}  name="food" inputId="food"/>
  </form>
)

export default MySelect