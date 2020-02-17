import React , {Component} from 'react';

class CarSelect extends Component {
   render() {
         return (
           <div>

           <label for="cars">Choose a car  :  </label>

           <select id="cars">
               <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
         </div>
       )
     }
}

export default CarSelect
