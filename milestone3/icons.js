$(document).ready(function () {
 // icone come da milestone 1
  class Icone {
    constructor(name, prefix, type,family) {
      this.name = name;
      this.prefix = prefix;
      this.type = type;
      this.family = family;
    }
  }

  //Modificare con funzione che costruisce l'oggetto
  const icone = [
    new Icone('cat','fa-','Animal','fas'),
    new Icone('crow','fa-','Animal','fas'),
    new Icone('dog','fa-','Animal','fas'),
    new Icone('dove','fa-','Animal','fas'),
    new Icone('dragon','fa-','Animal','fas'),
    new Icone('horse','fa-','Animal','fas'),
    new Icone('hippo','fa-','Animal','fas'),
    new Icone('fish','fa-','Animal','fas'),
    new Icone('carrot','fa-','Vegetable','fas'),
    new Icone('apple-alt','fa-','Vegetable','fas'),
    new Icone('lemon','fa-','Vegetable','fas'),
    new Icone('pepper-hot','fa-','Vegetable','fas'),
    new Icone('user-astronaut','fa-','User','fas'),
    new Icone('user-graduate','fa-','User','fas'),
    new Icone('user-ninja','fa-','User','fas'),
    new Icone('user-secret','fa-','User','fas')
  ];
  console.log(icone);
  // Semezioniamo il container icons

  const container = $(".icons");

  // colori come da milestone 2
    // definiamo dei colori per le icone (blue, orange, purple)
  const animalClor = 'blue';
  const vegetableClor = 'orange';
  const userClor = 'purple';

  //aggiungiamo dei colori come da milestone 2
  //aggiungiamo dei colori usando una funzione
  const animalArray = coloredIcons(icone,'Animal',animalClor);
  const vegetableArray = coloredIcons(icone,'Vegetable',vegetableClor);
  const userArray = coloredIcons(icone,'User',userClor);
  console.log(animalArray);
  console.log(vegetableArray);
  console.log(userArray);

  //inseriamo le icone nel container come da milestone 2
  //inseriamo le icone colorate nel container
  print(icone,container);

  //estrapoliamo i tipi di icone
  const types = [];
  typesIcon(icone,types);
  console.log(types);
  
  //aggiungiamo i tipi alla select
  const select = $("#type");
  addSelectOpt(types,select);


  //al change mostriamo solo le icone filtrate
  filterType(icone,container,select,' ');

  //mostriamo come passare un parametro a change e contemporaneamente destrutturiamo

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

const typesIcon = (iconsBox,newArr) => {
    iconsBox.forEach(element => {
      if (!newArr.includes(element.type)) {
        newArr.push(element.type);
        //console.log(element.type);
      }
    });
};

const addSelectOpt = (types, select) => {
  types.forEach( option => {
    select.append(`<option value="${option}">${option}</option>`);
  });
};

const filterType = (array,container,select,defaultSelect) => {
  select.change(
    function(){
      const value= select.val();
      console.log(value);
      if(value!=defaultSelect){
        const arrayForType = array.filter( element => element.type == value);
        container.children().remove();
        print(arrayForType,container);
      } else {
        container.children().remove();
        print(array,container);
      }
    });
};