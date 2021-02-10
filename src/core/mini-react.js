import { Component } from "./component.js";
import {type_check} from "./utils";


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
            if (!type_check(props, tagOrComponent)) throw new TypeError()
            return tagOrComponent.display(props)
        }

        return element
    },
}



export const createElement = (tagOrComponent, props, children) => {
    return createElement(tagOrComponent, props, children);
};


export const MiniReact = {
    createElement,
    Component
};

export const MiniReactDOM = {
    render: (element, domElement, props) => {
        domElement.appendChild(element);
    }
};