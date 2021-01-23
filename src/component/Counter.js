import React, { Component } from '../core/react' //need to fix import

//TODO : need to fix this component
class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: props.defaultValue || 0,
    }
  }

  propTypes = {
    defaultValue: { type: 'number' },
  }

  render() {
    return React.createElement('div', {}, [
      React.createElement(
        'button',
        { onClick: () => this.setState({ counter: this.state.counter + 1 }) },
        ['Add']
      ),
      React.createElement('span', { title: this.state.counter }, ['{{title}}']),
    ])
  }
}

ReactDOM.render(
  React.createElement(Counter, { defaultValue: 10 }),
  //   React.createElement(Counter, { defaultValue: 0 }),
  document.getElementById('root')
)
