// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component {
  constructor(props) {
    super(props)
  }

  delayed = (event) => {
    event.persist()
    setTimeout(() => {
      this.props.onDelayedClick(event)
    },
    this.props.delay
  )

  }
  render(){
    return (
      <div>
        <button
          onClick={this.delayed}>
        </button>
      </div>
    )
  }
}

export default DelayedButton
