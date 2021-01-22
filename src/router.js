import { Route, Routage } from "./core/routage.js";

// Je créer mon routeur avec mes routes dedans
export var router = new Routage("routerPrincipal", [
  new Route("Homepage", "/"),
  new Route("Contacts", "/contacts"),
]);

// Le routeur qui a été créer va prendre la route courante
export var route = router.filter(function(rt) {
  return rt.getPath() === window.location.pathname;
})[0];
