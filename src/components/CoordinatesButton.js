// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {

  constructor(props){
    super(props)
  }

  coordinates = (event) => {
    let array = [event.clientX, event.clientY]

    this.props.onReceiveCoordinates(array)
  }

  render(){
    return (
      <div>
      <button onClick={this.coordinates}>
      yerrr
      </button>
      </div>
    )
  }
}

export default CoordinatesButton
