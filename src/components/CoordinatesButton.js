import React from 'react';

class CoordinatesButton extends React.Component {
  constructor(props) {
    super(props)
  }

  coordinates = (event) => {
    let arr = [event.clientX, event.clientY]
    console.log(arr)
    this.props.onReceiveCoordinates(arr)
  }

  render() {
    return (
      <div>
        <button onClick={this.coordinates}>Coordinates Button</button>
      </div>
    )
  }
}

export default CoordinatesButton
