import React , {Component} from 'react';
import Select from 'react-select';

export const options = [
			        { value: '1' , label: 'Pasta'}, 
              { value: '2' , label: 'Fish'},
              { value: '3' , label: 'Meat'},
			        { value: '4' , label: 'Cheese'}
			]


class Food extends Component {

	state = {
    selectedOption: '',
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption })
  }

	render() { 
		const { selectedOption } = this.state;
		return (
			      <label>Food 
		           <Select 
		             name = 'food'
		             inputId = 'food'
		             value = {selectedOption}
		             onChange = {this.handleChange}   
		             options = {options}
		          /> 
					  </label> 
		)
	}
}

export default Food