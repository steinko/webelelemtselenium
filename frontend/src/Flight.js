import React , {Component} from 'react';

class Flight extends Component {

	constructor(props) { 
		 super(props)
		 this.state = {
			 from:'',
			 to:''
		}
		this.handleFromChange = this.handleFromChange.bind(this)
		this.handleToChange = this.handleToChange.bind(this)
	}

  handleFromChange(event) {this.setState({from: event.target.value})} 
  handleToChange(event) {this.setState({to: event.target.value})} 

	
	render() { return (
	   <div>	
		    <label> 
				From : 
				<input
				  id = "from" 
					list= "destinations"
					value = {this.state.from}
					onChange = {this.handleFromChange}
				  />
			</label>

			<label> 
				To : 
				<input
				  id = "to" 
					list= "destinations"
					value = {this.state.to}
					onChange = {this.handleToChange}
				  />
			</label>


			<datalist id="destinations">
        <option value="OSL"/>
        <option value="STC"/>
        <option value="CHP"/>
        <option value="FRA"/>
      </datalist>
	   </div>
	)} 
}
export default Flight;
