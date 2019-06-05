// Code CoordinatesButton Component Here
import React from 'react'


class CoordinatesButton extends React.Component {

  handleClick = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
    console.log(event.clientX, event.clientY)
    console.log(this.props.onReceiveCoordinates)
  }

  render() {
    return (
      <button onClick={this.handleClick}>Click</button>
    )
  }

}


export default CoordinatesButton;
