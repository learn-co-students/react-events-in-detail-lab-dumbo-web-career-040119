import React from 'react';

const DelayedButton = (props) => {

  return (
    <button onClick={(event) => {
      event.persist()
      setTimeout(() => props.onDelayedClick(event), props.delay)}
    }>Delayed</button>
  );
}

export default DelayedButton
