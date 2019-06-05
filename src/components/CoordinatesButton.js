import React from 'react';

const CoordinatesButton = (props) => {

  return (
    <button onClick={(event) => {props.onReceiveCoordinates([event.clientX, event.clientY])}}>Coordinate</button>
  );
}

export default CoordinatesButton
