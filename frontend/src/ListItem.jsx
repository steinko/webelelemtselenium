import React , { Component } from 'react'

function  ListItem  (props) {
    return ( <li key = {props.key}>{props.value}</li>)
}

export default ListItem