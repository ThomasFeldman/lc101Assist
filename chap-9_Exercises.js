//  Q1 For Loops

/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */
    for(i=0; i<21 ;i++){
        console.log(i);
      }
      
      for(i=3; i<=29 ;i=i+2){
        console.log(i);
      }
      
      for(i=12; i>=-14 ;i=i-2){
        console.log(i);
      }
      //challenge
      for(i=50; i>20 ;i--){
        if(i%3 == 0){
          console.log(i);
        }
        continue;
      }
      
      /*Exercise #2: 
      Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].
      */
      let str = "LaunchCode";
      let arr = [1, 5, 'LC101', 'blue', 42]
      /*
      Construct ``for`` loops to accomplish the following tasks:
        a. Print each element of the array to a new line.
        b. Print each character of the string - in reverse order - to a new line. */ 
      for(i = 0; i<arr.length; i++){
        console.log(arr[i]);
      }
      
      for( i=str.length -1; i>-1; i--){
        console.log(str.charAt(i));
      }
      
      
      /*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
        a. One array contains the even numbers, and the other holds the odds.
        b. Print the arrays to confirm the results. */
      
        let newArr = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
      
        let evenArr = [];
        let oddArr = [];
        for(i=0; i<newArr.length; i++){
          if(newArr[i]%2 == 0){
            evenArr.push(newArr[i]);
          }else{
            oddArr.push(newArr[i]);
          }
        }
        console.log(evenArr);
        console.log(oddArr);

//  Q2 While Loops

//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
const input = require("readline-sync");

let startingFuel = input.question("What is the starting fuel level? ");
let astronautCount = input.question("How many astronauts are on board? ");
let altitude = input.question("What is our altitude? ");
/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
while(!(startingFuel > 5000 && startingFuel < 30000)){
  console.log("Invalid input. Please enter in a number between 5,000 & 30,000.");
  startingFuel = input.question("What is the starting fuel level? ");
}




//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  
  while(!(astronautCount > 0 && astronautCount <= 7)){
  console.log("Invalid input. Please enter in a number between 1 & 7.");
  astronautCount = input.question("How many astronauts are on board? ");
}
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
while (startingFuel-(100*astronautCount) >= 0){
  startingFuel = startingFuel - (100*astronautCount);
  altitude = Number(altitude) + 50;
  console.log(startingFuel);
}


/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
if(altitude >= 2000){
  console.log( `The shuttle gained an altitude of ${altitude} km.`)
}else {
  console.log("Failed to reach orbit.")
}
console.log(altitude);