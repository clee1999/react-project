// “animal.type.name” => animal[“type”][“name”]
// prop_access(prairie, “animal.type.name”) => praire.animal.type.name => “chien”
// Si attribut non existant aﬃcher le chemin jusqu’à l’attribut => “animal.gender not exist”
// Si path vide ou null, renvoyer l’objet complet
function prop_access(obj, attribut) {

    if (obj === null || typeof obj !== "object") {
        console.log(attribut + " not exist");
        return;
    }
    if (typeof attribut !== "string" || attribut === null || attribut === "") {
        return obj;
    }
    let tab = attribut.split(".");
    let res = obj[tab[0]];

    if (!res)
        return attribut + ' not exist'

    for (let i = 1; i < tab.length; i++) {
        try {
            res = res[tab[i]];
            console.log(res);

        } catch (err) {
            let index = attribut.indexOf(tab[i]);
            console.log(index)
            return attribut.substring(0, index - 1) + ' not exist'
        }
    }
    return res;
}