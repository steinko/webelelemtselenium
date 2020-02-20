import React ,{ Component } from 'react'

class NumberList extends Component { 
	constructor(props)
	{ super(props)  }

	render() {
		const numbers = this.props.numbers;
        const listItems = numbers.map((number) =>
        <li key={number.toString()}>{number}</li>
  );
		return <ul id= "numberlist" >{listItems} </ul> 
    }
}

export default NumberList