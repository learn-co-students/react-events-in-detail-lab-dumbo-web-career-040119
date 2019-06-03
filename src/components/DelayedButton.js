// Code DelayedButton Component Here
import React, { Component } from 'react'

export default class DelayedButton extends Component {
    constructor(props){
        super(props)
        // console.log(onDelayedClick);
        console.log(props);
    }

    onDelayClick = (event) => {
        // const target = event.target;
        event.persist()
        setTimeout(() => 
        {
            this.props.onDelayedClick(event);
          }, this.props.delay);
    }
    render() {
        return (
            <div>
                <button onClick={this.onDelayClick}>DelayedButton</button>
            </div>
        )
    }
}

