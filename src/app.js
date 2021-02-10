// call du router, component, reactdom
import { router, route } from "./router.js";
import { MiniReactDOM } from "./core/mini-react.js";
import { PageComponent } from "./component/page.js";
import { HeaderComponent } from "./component/header.js";
import { ContactsComponent } from "./component/Contacts.js";
import { HomepageComponent } from "./component/Homepage";

// Initialisation de l'arboresence
MiniReactDOM.render(PageComponent, document.getElementById("root"), {});
MiniReactDOM.render(HeaderComponent, document.getElementById("header"), {
    router // Je me sers du routeur pour crée mon composant
});


promise.then(
    function(affichage) {
        var contentElement = document.getElementById("content");
        console.log(affichage);
        // Affichage en fonction de la route
        switch (!route ? null : route.getId()) {
            case "homepage":
                // Si on est sur la route home
                MiniReactDOM.render(HomepageComponent, contentElement, {
                });
                break;

            case "contacts":
                // Si on est sur la route contact
                MiniReactDOM.render(ContactsComponent, contentElement, {});
                break;
        }
    },
    function(err) {
        console.log(err);
    }
);