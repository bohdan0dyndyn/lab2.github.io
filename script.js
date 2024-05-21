let names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

for(let i = 0; i < names.length; i++) {
  if (names[i].charAt(0)==='J' || names[i].charAt(0)==='j') {
    speakGB.speak(names[i]);
  } else {
    speakH.speak(names[i]);  
  }
}

//Метод 2 ті чиє ім'я складається з 5 літер Hello, інші Good Buy
console.log("------------Metod 2\n-------------------\n");

for(let i = 0; i < names.length; i++) {
  if (names[i].length === 5) {
    speakH.speak(names[i]);
  } else {
    speakGB.speak(names[i]);  
  }
}