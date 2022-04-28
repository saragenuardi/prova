// ARRAY DI OGGETTI
// // definiamo un array di oggetti:
// // - ogni elemento dell'array è un oggetto che rappresenta una classe
// // - ogni classe ha le proprietà nome e numeroStudenti
// // - aggiungiamo una nuova classe all'array iniziale
// // - stampiamo nella console tutte le classi dell'array utilizzando dot notation, braket notatio e for in
//

//Crea un array di oggetti
const classes = [

    //ogni elemento dell'array è un oggetto(classe)
    {
        //ogni classe ha come proprietà nome e numeroStudenti
        nome: "classe1",
        numeroStudenti: 30,
                
    },

    {
        nome: "classe2,",
        numeroStudenti: 28,
    },

];


//Crea un nuovo oggetto che contiene una nuova classe
const newClasse = {
    nome: "classe3",
    numeroStudenti: 25,
}

//Aggiungiamo una nuova classe nell'array
classes.push(newClasse);
// console.log(classes)


//Stampiamo con dot notation
for (let i = 0; i < classes.length; i++) {
    const currentElement = classes[i];
    //console.log(currentElement.nome, currentElement.numeroStudenti);


    //Stampiamo con braket notation
    //console.log(currentElement["nome"], currentElement["numeroStudenti"]);

    //Stampiamo con FOR IN 
    for (let key in currentElement) {
        console.log(key);
        console.log(currentElement[key]);
    }

}
















