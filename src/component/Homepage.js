import { type_check } from "../core/utils.js";
import { MiniReact } from "../core/mini-react.js"
import {Component} from "../core/component";

export class HomepageComponent extends Component {
    constructor(props) {
        super(props);
        // utilisation du typecheck pour vérifier si les props sont les bonnes
        if (this.specs) type_check(props, this.specs);
    }

    // Affichage
    render = () => {
        const affichage = MiniReact.createElement(
            "div",
            { class: "container text-center" },
            "Une page homepage...",

        );
        return affichage;
    };


}
