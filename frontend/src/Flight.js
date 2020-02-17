import React , {Component} from 'react';
import Select from 'react-select';


const  from = 'Oslo'
class Flight extends Component { 
	
	render() { return (
	   <div>	
		    <label> 
				From : 
				<input
				  id = "from" 
				  list= "destinations"
				  />
			</label>

			<label> 
				To : 
				<input
				  id = "to" 
				  list= "destinations"
				  />
			</label>


			<datalist id="destinations">
              <option value="OSL"/>
              <option value="STC"/>
              <option value="CHP"/>
              <option value="FRA"/>
            </datalist>
	   </div>
	)
} }
export default Flight;
