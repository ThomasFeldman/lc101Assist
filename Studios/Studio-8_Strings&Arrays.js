//  String Modification
let str = 'LaunchCode';
const input = require('readline-sync');
let q = input.question("Shift how many letter? ")
if(q > str.length){
  q = 3;
  str = str.split('');
  trs= str.splice(0,q);
  str = str.concat(trs);
  str = str.join('');
  console.log(`${str} (defaulted to 3)`);
}else{
  str = str.split('');
  trs= str.splice(0,q);
  str = str.concat(trs);
  console.log(str.join('')); 
}

//  Array and String Conversion
let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";

let test = protoArray4;

if (test.includes(', ')){
  test = test.split(',');
  test = test.reverse();
  test = test.join(',');
  console.log(test);
}else if (test.includes(',')){
  test = test.split(',');
  test = test.reverse();
  test = test.join(',');
  console.log(test);
}else if(test.includes(';')){
  test = test.split(';');
  test = test.sort();
  test = test.join(';');
  console.log(test);
}else if(test.includes(' ')){
  test = test.split(' ');
  test = test.sort();
  test = test.reverse();
  test = test.join(' ');
  console.log(test);
}else {
  console.log('Error, error, error');
}

//  Bonus: Multi-dimensional Arrays
let food = "water bottles, meal packs, snacks, chocolate";
let equipment = "space suits, jet packs, tool belts, thermal detonators";
let pets = "parrots, cats, moose, alien eggs";
let sleepAids = "blankets, pillows, eyepatches, alarm clocks";

//a)
food = food.split(', ');
food = food.sort();
equipment = equipment.split(', ');
equipment = equipment.sort();
pets = pets.split(', ');
pets = pets.sort();
sleepAids = sleepAids.split(', ');
sleepAids = sleepAids.sort();

//b)let cargoHold = [];

cargoHold.splice(0, 0, food, equipment, pets, sleepAids);

console.log(cargoHold);

//c)
const input = require('readline-sync');
let q = input.question('Pick a cabinet (0-3): ');



//d)
if (q <= 3 && q >= 0){
  console.log(`Here's what's behind door number ${q}, [${cargoHold[q]}]`);
}else {
  console.log('Wrong choice, Jimbo. You\'re going to the shadow realm.')
}


//e)
let item = input.question(`Pick an item from cabinet ${q}: `);

if (q <= 3 && q >= 0){
  if (cargoHold[q].includes(`${item}`)){
    console.log(`Here's your ${item}`);
  }else{
    console.log(`Cabinet ${q} DOES/DOES NOT contain ${item}.`)
  }
  
}else {
  console.log('Wrong choice, Jimbo. You\'re going to the shadow realm.')
}
