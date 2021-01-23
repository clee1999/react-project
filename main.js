let ReactDOM = {
  render(rElement, hElement) {
    hElement.appendChild(rElement)
  },
}

let React = {
  createElement(tagOrComponent, props, children) {
    let element
    if (tagOrComponent === 'div') {
      element = document.createElement(tagOrComponent)
      for (let attribute in props) {
        element.setAttribute(attribute, props[attribute])
      }
      for (let subElement of children) {
        if (typeof subElement === 'string')
          subElement = document.createTextNode(
            subElement /**.interpolate(props) */
          )
        element.appendChild(subElement)
      }
    } /** component **/ else {
      if (!type_check(props, tagOrComponent.propTypes)) throw new TypeError()
      return tagOrComponent.display(props)
    }

    return element
  },
}

class Component {
  constructor(props) {
    this.props = props
  }
  //  this.getState = () => state.state

  display(props) {
    //...
    return this.render()
  }
  render() {}
}

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

// class Component {
//   state = {};
//   constructor(props) {
//     this.props = props;
//   }
//   display(props) {
//     //...
//     return this.render();
//   }
//   render() {}
// }

ReactDOM.render(
  React.createElement('div', { toWhat: { name: 'World' } }, [
    'Hello {{toWhat.name}}',
  ]),
  // React.createElement(HelloWorld, { name: 'world' }),
  document.getElementById('root')
)
