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

  // Classe route ; qui sera déclarée dans mon routeur avec un nom et un chemin, id et classname
  export class Route {
    constructor(name, id, path) {
      this.name = name;
      this.path = path;
        this.id = id;
    }
  
    getName = () => {
      return this.name;
    };
  
    getPath = () => {
      return this.path;
    };

      getId = () => {
          return this.id;
      };

  }