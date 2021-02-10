import { MiniReact } from "../core/mini-react.js";
import { Component } from "../core/component.js";
// page qui englobe tout : main > header and content
export class PageComponent extends Component {
    constructor(props) {
        super(props);
    }

    render = () => {
        const affichage = MiniReact.createElement("div", { id: "main" },
            MiniReact.createElement("div", {id: "header"}, ""),
            MiniReact.createElement("div", {id: "content"}, "")
        );
        return affichage;
    };
}
