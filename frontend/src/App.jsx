import React from 'react';

import CarSelect from './CarSelect'
import Flight from './Flight'
import Planets from './Planets'
import Food from './Food'
import NumberList from './NumberList'
import Name from './Name'
import RadioButton from './RadioButton/Radiobutton'

const numbers = [0,1, 2, 3, 4];
function App() {
  return (
    <div className="App">
      <CarSelect />
      <Flight />
      <Planets />
      <Food />
      <NumberList numbers={numbers}/>
      <Name/>
      <RadioButton/>
    </div>
  );
}

export default App;
