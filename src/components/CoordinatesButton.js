import React from 'react';

export default class CoordinatesButton extends React.Component{

  parseCoords = event => {
    console.log(event.clientX)
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render(){
    return (
      <button onClick={this.parseCoords}>Locate</button>
    )
  }
}
