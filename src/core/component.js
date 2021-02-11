// Création du component... utilisation du state ?
// Ici allons mettre en place la structure d'un component qui va être utilisé pour afficher nos pages
// Cette classe Component qui va être exporté, bien évidamment, va comporter des éléments particulers
// Des propriétés, un statut vide pour l'instant, un previous status et un previous render
export class Component {
    constructor(props) {
            this.props = props;
            this.state = {};
            this.prevState;
            this.prevRender = null;
        }
        // setter status qui comporte un previous status, le statut qui va devenir le nouveau statut puis ensuite va faire apparaitre tout ça
    setState = newState => {
        this.prevState = this.state;
        this.state = newState;
        this.display();
    };

    // get le status
    getState = () => {
        return this.state;
    };


    //   - display appelle la méthode `shouldUpdate()` du composant courant => compare newProps avec les oldProps
    //   - si shouldUpdate
    //   - appelle la fonction `render` du composant
    //   - si `render` invoque d'autres composants, le composant courant appelle la fonction `display (compProps)` des sous-composants
    //   - le résultat de `display` est ajouté au DOM sous le noeud parent

    shouldUpdate = () => {
        return (
            JSON.stringify(this.props) != JSON.stringify(this.newProps)
        );
    };

    display = () => {
        if (this.shouldUpdate()) {
            this.prevRender = this.render();
            return this.prevRender;
        } else {

        }
    };

    render = () => {
        let elementHTML = document.createElement('test');
        elementHTML.setAttribute('test', 'heeeooooo');


    }
}