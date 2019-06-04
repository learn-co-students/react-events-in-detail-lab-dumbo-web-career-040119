import React from 'react';

class DelayedButton extends React.Component {
  constructor(props) {
    super(props)
  }

  delayClick = (event) => {
    event.persist()
    setTimeout(() => {
      this.props.onDelayedClick(event)
    }, this.props.delay)
  }
  render() {
    return (
      <div>
        <button onClick={this.delayClick}>Delayed Button</button>
      </div>
    )
  }
}

export default DelayedButton
