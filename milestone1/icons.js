$(document).ready(function () {
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


  // Selezioniamo il container icons

  const container = $(".icons");
  console.log(container);

  //inseriamo le icone nel container (possiamo creare una funzione tipo print() per inserire gli elementi e richiamarla qui)
  print(icone,container);
  

});


/* ---- FUNCTIONS ----*/

// Creiamo una funzione per iterare nell'array e che appenda al container le icone.
const print = (icone, iconBox ) => {
  iconBox.html();
  icone.forEach( icona => {
    // tip: possiamo usare un ciclo foreach qui e destrutturare gli le proprieta degli elementi di un array
    //Destrutturizziamo l'oggetto per estrapolare le info che definizono la singola icona 
    const {name, prefix,family} = icona; 
    
    // tip: il template literal ci puo aiutare con il markup
    const markup = `
      <div>
        <i class="${family} ${prefix}${name}"></i>
        <div class="title">${name.toUpperCase()}</div>
      </div>
    `;
    iconBox.append(markup);
  });
};


