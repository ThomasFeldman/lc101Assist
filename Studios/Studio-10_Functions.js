let arrayTest1 = ['apple', 'potato', 'Capitalized Words'];
let arrayTest2 = [123, 8897, 42, 1168, 8675309];
let arrayTest3 = ['hello', 'world', 123, 'orange'];



// Coding solution

function reverseCharacters(input){
  let character = [];
  if(typeof input === 'string'){
    character.push(input.split('').reverse().join(''));
  }else{
    character.push(String (input).split('').reverse().join(''));
    return Number(character);
  }
  return character.join('');
  }


function completeReversal(oldArray){
  let newArray = [];
  for(i=0; i<oldArray.length; i++){
    newArray.push(reverseCharacters(oldArray[i]));
  }
  return newArray.reverse();
}

console.log(completeReversal(['apple', 'potato', 'carrot']));
