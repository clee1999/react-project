## Pour lancer le projet :

`python3 -m http.server 7800`

Go to `http://127.0.0.1:7800/`

Obligations
Norme Javascript: ES6/ES2015 Notions présentes:

- Prototypes d'objet natif (String, Object, Number, ...)
- Object.prop_access avec exception
- String.interpolate(animal)
- remplace toutes les chaines entourées de "{{ }}" par la valeur de l'objet
- machaine = "Type d'animal: {{ type.name }}"
- animal = {type: {name: "chien"}}
- machaine.interpolate(animal) => "Type d'animal: chien"
- Création d'objet et objet hérité dont certains avec attributs/méthodes privés
- Création de modules
- Gestion de l'historique (système de routage)
- Utilisation des Promises
- Utilisation du type_checker
- version minimum: 3
- exemples cas d'utilisation: Vérifier les données en entrée de constructeur

## 1. Créer un mini-react

- Gestion du routage
- Validation des propriétés passées au composant
- Algorithme => se rapproche de l'algo de l'exercice _HereWeGo!_
- Chaque composant hérite d'un object `Component` ayant une méthode `display(newProps)`
- display appelle la méthode `shouldUpdate()` du composant courant => compare newProps avec les oldProps
- si shouldUpdate
- appelle la fonction `render` du composant
- si `render` invoque d'autres composants, le composant courant appelle la fonction `display (compProps)` des sous-composants
- le résultat de `display` est ajouté au DOM sous le noeud parent

## 2. Créer un mini site de démo (2/3 pages)

Utilisation du routing et du mini-react
Un minimum de design
