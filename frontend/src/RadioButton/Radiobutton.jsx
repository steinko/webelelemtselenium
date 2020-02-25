import React , {Component} from 'react'

class RadioButton extends Component {

	constructor() {
	  super()
	  this.state = { 
		  selectedOption: "option1"}
	 this.handleOptionChange = this.handleOptionChange.bind(this);
	}

	handleOptionChange = changeEvent => {
      this.setState({
        selectedOption: changeEvent.target.value
      })
    }

	render() {
	  return (
		  <form>
	      <label>
		   Option 1
		   <input 
			 type = "radio" 
			 id = "option1"
			  value="option1"
			 checked={this.state.selectedOption === "option1"}
			 onChange={this.handleOptionChange}
		   />
		</label>

		<label>
		   Option 2
		   <input 
			 type = "radio" 
			 id =  "option2"
			 value="option2"
			 checked={this.state.selectedOption === "option2"}
			 onChange={this.handleOptionChange}
		   />
		</label>
		</form>
	  )
	 }
	}
export default RadioButton
