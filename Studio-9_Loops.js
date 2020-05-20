//Part A #1: Initialize variables to store the following arrays. Remember to use descriptive names.

let protein = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
let grain = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let vegetable = ['peas', 'green beans', 'kale','edamame', 'broccoli', 'asparagus'];
let beverage = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let dessert = ['apple', 'banana', 'more kale','ice cream', 'chocolate', 'kiwi'];

//Part A #2: Construct a for loop that assembles a meal for each of 6 astronauts.
let pantry = [];
pantry.push(protein);
pantry.push(grain);
pantry.push(vegetable);
pantry.push(beverage);
pantry.push(dessert);

for(i=0; i < pantry.length; i++){
  let meal = []
  meal.push(pantry[0][i]);
  meal.push(pantry[1][i]);
  meal.push(pantry[2][i]);
  meal.push(pantry[3][i]);
  meal.push(pantry[4][i]);
  console.log(`Astronaut ${i+1}, your meal for the day will be ${meal.join(", ")}, congratulations!\n`);
}


//Part B(Self-destruct system)
//Construct a for loop that combines two strings together, alternating the characters from each source.  Print the result.

//Example: If string = “1234” and otherString = “5678”, then the output will be “15263748”.

//For now, make sure the two strings contain the same number of characters!

let a = 'Rutabagas';
let b = 'Chemistry';

let code = [];
for (i=0; i<a.length || i<b.length; i++){
  a.split();
  b.split();
  code.push(a[i]);
  code.push(b[i]);
}
code = code.join('');
console.log(code);



//Part C #5: Using a while loop, ask the user to select the number of meals to assemble.  Validate the input to make sure it is an integer from 1 - 6.
const input = require("readline-sync");
let userNum = input.question("Select the number of meals. ");

let protein = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
let grain = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let vegetable = ['peas', 'green beans', 'kale','edamame', 'broccoli', 'asparagus'];
let beverage = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let dessert = ['apple', 'banana', 'more kale','ice cream', 'chocolate', 'kiwi'];

let pantry = [];
pantry.push(protein);
pantry.push(grain);
pantry.push(vegetable);
pantry.push(beverage);
pantry.push(dessert);


while(userNum < 1 || userNum > 6){
    console.log("Please enter a number from 1-6.")
    userNum = input.question("Select the number of meals. ");
}
console.log('');
for(i=0; i < userNum; i++){
  let meal = []
  meal.push(pantry[0][i]);
  meal.push(pantry[1][i]);
  meal.push(pantry[2][i]);
  meal.push(pantry[3][i]);
  meal.push(pantry[4][i]);
  
  if(meal.includes("kale")){
    console.log(`Astronaut ${i+1}, your meal for the day will be ${meal.join(", ")}, congratulations!`);
    console.log("(Dont worry, you can have double chocolate tomorrow.)\n");
  }else{
    console.log(`Astronaut ${i+1}, your meal for the day will be ${meal.join(", ")}, congratulations!\n`);
  }
}