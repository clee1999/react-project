import { type_check_v1, type_check_v2 } from '../../functions/type_check'

//TODO: create type_check function
//TODO: fix create display function ?
//TODO: create shouldUpdate function
//TODO: fix class Componenet

let ReactDOM = {
  render(rElement, hElement) {
    hElement.appendChild(rElement)
  },
}
// tagOrComponent : div ==> string
//props : {"toWhat":{"name":"World"}}
// children : ["Hello {{toWhat.name}}"]
//subElement : Hello {{toWhat.name}}
// PAR RAPPORT A CA ==>
// ReactDOM.render(
//   React.createElement('div', { toWhat: { name: 'HelloWorld' } }, [
//     'Hello {{toWhat.name}}',
//   ]),
//   document.getElementById('root')
// )

let React = {
  createElement(tagOrComponent, props, children) {
    let element
    if (tagOrComponent === 'div') {
      element = document.createElement(tagOrComponent)
      for (let attribute in props) {
        element.setAttribute(attribute, props[attribute])
        // console.log(JSON.stringify(props))
      }
      for (let subElement of children) {
        if (typeof subElement === 'string')
          subElement = document.createTextNode(
            subElement /**.interpolate(props) */
          )
        // console.log(subElement)
        element.appendChild(subElement)
      }
    } /** component **/ else {
      if (!type_check(props, tagOrComponent.propTypes)) throw new TypeError()
      return tagOrComponent.display(props)
    }

    return element
  },
}

// Création du component... utilisation du state ?
// Ici allons mettre en place la structure d'un component qui va être utilisé pour afficher nos pages
// Cette classe Component qui va être exporté, bien évidamment, va comporter des éléments particulers
// Des propriétés, un statut vide pour l'instant, un previous status et un previous render
export class Component {
  constructor(props) {
    this.props = props
    this.state = {}
    this.prevState
    this.prevRender = null
  }
  // setter status qui comporte un previous status, le statut qui va devenir le nouveau statut puis ensuite va faire apparaitre tout ça
  setState = (newState) => {
    this.prevState = this.state
    this.state = newState
    this.display()
  }

  // get le status
  getState = () => {
    return this.state
  }

  //   - display appelle la méthode `shouldUpdate()` du composant courant => compare newProps avec les oldProps
  //   - si shouldUpdate
  //   - appelle la fonction `render` du composant
  //   - si `render` invoque d'autres composants, le composant courant appelle la fonction `display (compProps)` des sous-composants
  //   - le résultat de `display` est ajouté au DOM sous le noeud parent

  shouldUpdate = () => {
    return JSON.stringify(this.props) != JSON.stringify(this.newProps)
  }

  display = () => {
    if (this.shouldUpdate()) {
      this.prevRender = this.render()
      return this.prevRender
    } else {
    }
  }
}

// class HelloWorld extends Component {
//   propTypes = {
//     name: { type: 'string', enum: ['world', 'you', 'me'] },
//   }

//   render() {
//     return React.createElement('div', { toWhat: { name: this.props.name } }, [
//       'Hello {{toWhat.name}}',
//     ])
//   }
// }

ReactDOM.render(
  React.createElement('div', { toWhat: { name: 'World' } }, [
    'Hello {{toWhat.name}}',
  ]),
  // React.createElement(HelloWorld, { name: 'world' }),
  document.getElementById('root')
)
