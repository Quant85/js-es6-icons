$(document).ready(function () {
  // Qui le icone che abbiamo definito nella milestone 1
   // Creiamo array di oggetti per le icone con le seguenti proprieta: name, prefix, type, family 


  class Icone {
    constructor(name, prefix, type,family) {
      this.name = name;
      this.prefix = prefix;
      this.type = type;
      this.family = family;
    }
  }

  const icone = [
    new Icone('cat','fa-','animal','fas'),
    new Icone('crow','fa-','animal','fas'),
    new Icone('dog','fa-','animal','fas'),
    new Icone('dove','fa-','animal','fas'),
    new Icone('dragon','fa-','animal','fas'),
    new Icone('horse','fa-','animal','fas'),
    new Icone('hippo','fa-','animal','fas'),
    new Icone('fish','fa-','animal','fas'),
    new Icone('carrot','fa-','vegetable','fas'),
    new Icone('apple-alt','fa-','vegetable','fas'),
    new Icone('lemon','fa-','vegetable','fas'),
    new Icone('pepper-hot','fa-','vegetable','fas'),
    new Icone('user-astronaut','fa-','user','fas'),
    new Icone('user-graduate','fa-','user','fas'),
    new Icone('user-ninja','fa-','user','fas'),
    new Icone('user-secret','fa-','user','fas')
  ];
  console.log(icone);
  // Semezioniamo il container icons

  const container = $(".icons");
  //console.log(container);

  // definiamo dei colori per le icone (blue, orange, purple)
  const animalClor = 'blue';
  const vegetableClor = 'orange';
  const userClor = 'purple';

  //aggiungiamo dei colori usando una funzione
  const animalArray = coloredIcons(icone,'animal',animalClor);
  const vegetableArray = coloredIcons(icone,'vegetable',vegetableClor);
  const userArray = coloredIcons(icone,'user',userClor);
  console.log(animalArray);
  console.log(vegetableArray);
  console.log(userArray);

  //inseriamo le icone colorate nel container

  print(animalArray,container);
  print(vegetableArray,container);
  print(userArray,container);
});


/* ---- FUNCTIONS ----*/
//1. Funzione milestone 1
const print = (icone, iconBox ) => {
  iconBox.html();
  icone.forEach( icona => {
    // tip: possiamo usare un ciclo foreach qui e destrutturare gli le proprieta degli elementi di un array
    //Destrutturizziamo l'oggetto per estrapolare le info che definizono la singola icona 
    const {name,prefix,family,color} = icona; 
    //console.log(icona);
    
    // tip: il template literal ci puo aiutare con il markup
    const markup = `
      <div>
        <i class="${family} ${prefix}${name}" style="color:${color}"></i>
        <div class="title">${name.toUpperCase()}</div>
      </div>
    `;
    iconBox.append(markup);
  });
};


//2. funzione per assegnare un colore ad un icona
// tip: possiamo invocare qui dentro un'altra funzione (2) oppure usare map 
const coloredIcons = (allTypeArr,typeSelect,color) => {
      let arrayTypeSelect = allTypeArr.filter(element => {
      if (element.type == typeSelect) {
        return {...element.color = color};
      }
    });
    return arrayTypeSelect;
};

//3. funzione per ottenere da un array
// tip: possiamo usarla nella funzione precedente oppure usare map senza creare questa funzione.