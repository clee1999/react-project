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

ReactDOM.render(
  React.createElement('div', { toWhat: { name: 'World' } }, [
    'Hello {{toWhat.name}}',
  ]),
  document.getElementById('root')
)
