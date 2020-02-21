import React ,{ Component } from 'react'
import ListItem from './ListItem'

class NumberList extends Component { 
	
	render() {
		const numbers = this.props.numbers;
        const listItems = numbers.map((number) =>
        <ListItem id = {number.toString()} value = {number}/>
  );
		return <ul id= "numberlist" >{listItems} </ul> 
    }
}

export default NumberList