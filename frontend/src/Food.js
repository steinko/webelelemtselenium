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
    selectedOption: null,
  }

  handleChange = selectedOption => {
    this.setState(
      { selectedOption },
      () => console.log(`Option selected:`, this.state.selectedOption)
    )
  }

	render() { 
		const { selectedOption } = this.state;
		return (
          <form>
			      <label>Food 
		           <Select 
		             name = 'food'
		             inputId = 'food'
		             value = {selectedOption}
		             onChange = {this.handleChange}   
		             options = {options}
		          /> 
					  </label> 
	       	</form>
		)
	}
}

export default Food