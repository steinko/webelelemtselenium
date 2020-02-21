import React , {Component} from 'react';
import {putNameService} from './service/NameService'

class Name extends Component {
	constructor(props) {
      super(props);
      this.state = {value: localStorage.getItem('value')|| ''};

	  this.handleChange = this.handleChange.bind(this)
	  this.handleSubmit = this.handleSubmit.bind(this)  
   }

   handleSubmit(event) {
    event.preventDefault();
	putNameService(this.state.value);
    
   }

   handleChange(event) {
	
	localStorage.setItem('value',event.target.value)
	this.setState({value: event.target.value})
   }

   componentDidMount() {  }

  render() { 
	return (
	  <form>
	    <label>
		  Name
		  <input 
		    id = "name" 
		    type="text"
		    value={this.state.value} 
		    onChange={this.handleChange}
		  />
	   </label>
		 <input 
		   type = "submit" 
		   id = "submit" 
		   data-testid = "submit"  
		   onSubmit = {this.handleSubmit} 
		   value= "Submit"
		/>
	  </form>
    )
  }
}

export default Name