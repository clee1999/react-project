import React, { Component } from '../core/react' //need to fix import

//TODO: need to fix it
class HelloWorld extends Component {
  propTypes = {
    name: { type: 'string', enum: ['world', 'you', 'me'] },
  }

  render() {
    return React.createElement('div', { toWhat: { name: this.props.name } }, [
      'Hello {{toWhat.name}}',
    ])
  }
}

ReactDOM.render(
  React.createElement(HelloWorld, { name: 'world' }),
  document.getElementById('root')
)
