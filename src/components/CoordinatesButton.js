// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {
    constructor(props){
        super(props)
        // console.log(props)
    }

    coord =(e) =>{
        let arr = [e.clientX, e.clientY]
        console.log(arr)
        this.props.onReceiveCoordinates(arr)
        // return arr;
    }
    render() {
        return (
            <div>
                <button onClick={this.coord}>CoordinatesButton</button>
            </div>
        )
    }
}
