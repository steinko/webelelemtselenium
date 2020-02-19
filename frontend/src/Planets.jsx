import React , {Component} from 'react';

class Planets extends Component {
  constructor(props) {
       super(props)
       this.state = { value: ''}
       this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange(event) {
      this.setState({value: event.target.value});
    }

   render() {
	   const planets = [
				{name: 'Earth' },
				{name: 'Mars' },
        {name: 'Jupiter' },
				{name: 'Saturn' }
              ]
	   let optionItems = planets.map((planet) =>
	   <option id={planet.name} key ={planet.name} >{planet.name}</option> )
         return (
           <div>
             <label >Choose a planet:
               <select 
                  id="planets" 
                  value = {this.state.value}
                  onChange=  {this.handleChange} >
                  {optionItems}  
                </select>
            </label>
         </div>
       )
     }
}

export default Planets
