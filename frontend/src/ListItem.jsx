import React  from 'react'

function  ListItem  (props) {
    return ( <li key = {props.id}>{props.value}</li>)
}

export default ListItem