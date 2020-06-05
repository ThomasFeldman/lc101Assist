//  Q1

/* Your function should:
a) If passed a number, return the tripled value.
b) If passed a string, return the string “ARRR!”
c) Be sure to test your function before moving on the next part. */
let anonFunc = function(userInput) {
    if ((typeof userInput) === 'number'){
      return userInput*3
    }else if ((typeof userInput) === 'string') {
      return "ARRR!"
    }else {
      return 'oops';
    }
  };
  
console.log(anonFunc(3));


/* Use your fuction and the map method to change an array  as follows:
a) Triple any the numbers.
b) Replace any strings with “ARRR!”
c) Print the new array to confirm your work.
*/

let arr = ['Elocution', 21, 'Clean teeth', 100];

console.log(arr.map(anonFunc));


// Q2

function checkFuel(level) {
    if (level > 100000){
      return 'green';
    } else if (level > 50000){
      return 'yellow';
    } else {
      return 'red';
    }
  }
  
  function holdStatus(arr){
    if (arr.length < 7) {
      return `Spaces available: ${7-arr.length}.`;
    } else if (arr.length > 7){
      return `Over capacity by ${arr.length-7} items.`;
    } else {
      return "Full";
    }
  }
  
  let fuelLevel = 200000;
  let cargoHold = ['meal kits', 'space suits', 'first-aid kit', 'satellite', 'water', 'gold', 'AE-35 unit'];
  
  console.log("Fuel level: " + checkFuel(fuelLevel));
  console.log("Hold status: " + holdStatus(cargoHold));

  
let normalCargo = function(cargo, num){
  let stealCargo = [];
  let item1 = 0
  let item2 = 0
  if(cargo.includes('gold')){
    item1 = cargo.splice(cargo.indexOf('gold'),1);
    cargo.push("fool's gold");
  }
  if(cargo.includes('AE-35 unit')){
    item2 = cargo.splice(cargo.indexOf('AE-35 unit'),1);
    cargo.push("BS-69 unit");
  }
  stealCargo = stealCargo.concat(item1, item2);
  
  if(num == 0){
      return cargo;
  }
  if(num == 1){
      return stealCargo;
  }
}
console.log(normalCargo(cargoHold, 1));