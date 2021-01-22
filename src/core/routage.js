// Classe qui va servir à créer mon routeur en incluant mes routes déclarées
export class Routage {
    constructor(name, route) {
      this.name = name;
      this.route = route;
    }

    getRoutes = () => {
      return this.route;
    };
  
    getName = () => {
      return this.name;
    };

  }

  // Classe route ; qui sera déclarée dans mon routeur avec un nom et un chemin
  export class Route {
    constructor(name, path) {
      this.name = name;
      this.path = path;
    }
  
    getName = () => {
      return this.name;
    };
  
    getPath = () => {
      return this.path;
    };

  }