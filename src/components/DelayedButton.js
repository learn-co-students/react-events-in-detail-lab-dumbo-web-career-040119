// Code DelayedButton Component Here
import React from 'react'


class DelayedButton extends React.Component {

  handleDelayedClick = (event) => {
    event.persist()
    console.log(event);
    setTimeout(() => {
      this.props.onDelayedClick(event)
    }, this.props.delay)
  }

  render () {
    return (
      <button onClick={this.handleDelayedClick} delay={this.props.delay}>Click</button>
    )
  }
}

export default DelayedButton;
