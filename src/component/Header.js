import { MiniReact } from "../core/mini-react";
import { prop_access } from "../core/utils.js";
import {Component} from "../core/component";

export class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.routes = prop_access(props.router, "routes"); //  accès à mon routage ^^
        this.selectedLink = window.location.pathname; // permet d'obtenir the current route
    }

    // render
    render = () => {

        // je construis mes  liens
        var routeHomepage = this.routes.filter(function(rt) {
            return rt.getId() === "homepage";
        });
        var routeContacts = this.routes.filter(function(rt) {
            return rt.getId() === "contacts";
        });

        // Creation de l'arboresence
        const affichge = MiniReact.createElement(
            "header",
            { class: "container text-center" },
            MiniReact.createElement("h1", null, "Yolo titre header"),
            MiniReact.createElement(
                "nav",
                null,
                MiniReact.createElement(
                    "a",
                    {
                        class: routeHomepage.getClassName(),
                        id: routeHomepage.getId(),
                        href: "." + routeHomepage.getPath(),
                        style:
                            this.selectedLink === routeHomepage.getPath()
                                ? "color : blue"
                                : ""
                    },
                    routeHomepage.getName()
                ),
                MiniReact.createElement(
                    "a",
                    {
                        class: routeContacts.getClassName(),
                        id: routeContacts.getId(),
                        href: "." + routeContacts.getPath(),
                        style:
                            this.selectedLink === routeContacts.getPath()
                                ? "color : blue"
                                : ""
                    },
                    routeContacts.getName()
                ),
            )
        );

        return affichage;
    };


}
