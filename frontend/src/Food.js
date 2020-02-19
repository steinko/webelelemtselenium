import React , {Component} from 'react';
import Select from 'react-select';

export const options = [
			        { value: '1' , label: '1'}, 
              { value: '2' , label: '2'},
              { value: '3' , label: '3'},
			        { value: '4' , label: '4'}
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
			  <label htmlFor= "food">Food</label> 

		<Select 
		   name = 'food'
		   inputId = 'food'
		   value = {selectedOption}
		   onChange = {this.handleChange}   
		   options = {options}
		/> 
		</form>
		)
	}
}

export default Food