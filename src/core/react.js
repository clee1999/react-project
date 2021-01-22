import { Component } from "./component.js";

let ReactDOM = {
    render(rElement, hElement) {
      hElement.appendChild(rElement);
    },
  };
  
  let React = {
    createElement(tagOrComponent, props, children) {
      let element;
      if (tagOrComponent === "div") {
        element = document.createElement(tagOrComponent);
        for (let attribute in props) {
          element.setAttribute(attribute, props[attribute]);
        }
        for (let subElement of children) {
          if (typeof subElement === "string")
            subElement = document.createTextNode(
              subElement /**.interpolate(props) */
            );
          element.appendChild(subElement);
        }
      } /** component **/ else {
        if (!type_check(props, tagOrComponent.propTypes)) throw new TypeError();
        return tagOrComponent.display(props);
      }
  
      return element;
    },
  };
  
  class HelloWorld extends Component {
    propTypes = {
      name: { type: "string", enum: ["world", "you", "me"] },
    };
  
    render() {
      return React.createElement("div", { toWhat: { name: this.props.name } }, [
        "Hello {{toWhat.name}}",
      ]);
    }
  }
  
  class Component {
    state = {};
    constructor(props) {
      this.props = props;
    }
    display(props) {
      //...
      return this.render();
    }
    render() {}
  }
  
  class Counter extends Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: props.defaultValue || 0,
      };
    }
  
    propTypes = {
      defaultValue: { type: "number" },
    };
  
    render() {
      return React.createElement("div", {}, [
        React.createElement(
          "button",
          { onClick: () => this.setState({ counter: this.state.counter + 1 }) },
          ["Add"]
        ),
        React.createElement("span", { title: this.state.counter }, ["{{title}}"]),
      ]);
    }
  }
  
  class Router extends Component {
    state = {
      path: "/home",
    };
  
    render() {
      return React.createElement("div", {}, [
        React.createElement(
          "button",
          { onClick: () => this.setState({ path: "/home" }) },
          ["Home"]
        ),
        React.createElement(
          "button",
          { onClick: () => this.setState({ path: "/about" }) },
          ["About"]
        ),
        path === "/home" && React.createElement(Home),
        path === "/about" && React.createElement(About),
      ]);
    }
  }
  
  ReactDOM.render(
    React.createElement("div", { toWhat: { name: "World" } }, [
      "Hello {{toWhat.name}}",
      React.createElement(HelloWorld, { name: "world" }),
      React.createElement(Counter, { defaultValue: 10 }),
      React.createElement(Counter, { defaultValue: 0 }),
    ]),
    document.getElementById("root")
  );