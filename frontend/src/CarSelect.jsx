import React , {Component} from 'react';

class CarSelect extends Component {

   constructor(props) {
      super(props)
      this.state = {value: ''}
      this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }
    
   render() {
         return ( 
           <label >Choose a car  : 
              <select id="cars" value= {this.state.value} onChange= {this.handleChange}>
                 <option id="volvo" value="volvo">Volvo</option>
                 <option id="saab" value="saab">Saab</option>
                 <option id="mercedes" value="mercedes">Mercedes</option>
                 <option id="audi" value="audi">Audi</option>
            </select>
           </label>
       )
     }
}

export default CarSelect
