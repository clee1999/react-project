import { Route, Routage } from "./core/routage.js";

// Je créer mon routeur avec mes routes dedans
export var router = new Routage("routerPrincipal", [
  new Route("Homepage", "homepage","/"),
  new Route("Contacts", "contacts", "/contacts"),
]);

// Le routeur qui a été créer va prendre la route courante
// ma route va devenir le router qui va filtrer mes elems de router
export var route = router.filter(function(rt) {
  // hop, retourne moi ma nouvelle route en écrasant celle d'actuel
  return rt.getPath() === window.location.pathname;
});
