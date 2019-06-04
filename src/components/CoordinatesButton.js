import React, { Component } from 'react';

class CoordinatesButton extends Component {

  click = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  };


  render() {
    return (
      <button onClick={this.click}>Click me!</button>
    );
  }

}
export default CoordinatesButton;
