// Part 1 Rectangles
// Q1
function makeLine(size){
    let hashPrint = [];
    for(i=0; i<size; i++){
      hashPrint.push("#");
    }
    hashPrint = hashPrint.join('');
    console.log(hashPrint);
  }
  makeLine(3)
  
  // Q2
  function makeSquare(size){
    let lineSize = size;
    while(size>0){
      makeLine(lineSize);
      size = size-1;
    }
  }
  makeSquare(4);
  
  // Q3
  function makeRectangle(width, height){
   while(height>0){
     makeLine(width);
     height=height-1;
   } 
  }
  makeRectangle(5,3);
  
  // Q4
  function makeSquareEasy(size){
    makeRectangle(size, size);
  }
  makeSquareEasy(6);

  // Part 2 Triangles These are pretty difficult
// Q1
function makeDownwardStairs(height){
    let triArray = [];
    for(i=1; i<=height; i++){
      triArray.push('#');
      console.log(triArray.join(''));
   }
  }
  // makeDownwardStairs(5);
  
  // Q2
  function makeSpaceLine(numSpaces, numChars){
    let finalArray = [];
    let numSpaceArray = [];
    let numCharsArray = [];
  
    for(i=0;i<numSpaces;i++){
      numSpaceArray.push('_');
    }
    for(i=0;i<numChars;i++){
      numCharsArray.push('#');
    }
    
    finalArray = finalArray.concat(numSpaceArray,numCharsArray,numSpaceArray);
  
    console.log(finalArray.join(''));
  }
  makeSpaceLine(3,5);
  
  // Q3
  //adjusted previous function to make ' ' instead of '_'
  function makeSpaces(numSpaces, numChars){
    let finalArray = [];
    let numSpaceArray = [];
    let numCharsArray = [];
  
    for(i=0;i<numSpaces;i++){
      numSpaceArray.push(' ');
    }
    for(i=0;i<numChars;i++){
      numCharsArray.push('#');
    }
    
    finalArray = finalArray.concat(numSpaceArray,numCharsArray,numSpaceArray);
  
    console.log(finalArray.join(''));
  }
  
  //Need to adjust to print out triangle of height x, currently not working.
  function makeIsoscelesTriangle (height) {
    let triHashes=1;
    let triSpaces=height;
    for(i=0; i<height; i++){
      makeSpaces(triSpaces/2, triHashes)
      triSpaces = triSpaces-2;
      triHashes = triHashes+2;
    }
  }
  //makeIsoscelesTriangle(10);
  
  // Q4
  
  //make reverse of previous functions
  
  function makeReverseSpaces(numSpaces, numChars){
    let finalArray = [];
    let numSpaceArray = [];
    let numCharsArray = [];
  
    for(i=0;i<numSpaces;i++){
      numSpaceArray.push('');
    }
    for(i=0;i<numChars;i++){
      numCharsArray.push('#');
    }
    
    finalArray = finalArray.concat(numSpaceArray,numCharsArray,numSpaceArray);
  
    console.log(finalArray.join(''));
  }
  
  
  function makeReverseIsoscelesTriangle (height) {
    let triHashes=1;
    let triSpaces=height;
    for(i=0; i<height; i++){
      makeSpaces(triSpaces/2, triHashes)
      triSpaces = triSpaces-2;
      triHashes = triHashes+2;
    }
  }
  makeReverseIsoscelesTriangle(3);
  
  function makeDiamonds(height){
    hash(height);
    hashReverse(height);
  }









  //Use the repeat to make this much easier.
let b = 6;

function hash(num){
  for(i=0; i<=num; i++){
    console.log('#'.repeat(i));
  }
}

hash(b);

let a = 6;

function hashReverse(num){
  for(i=num; i>0; i--){
    console.log('#'.repeat(i));
  }
}

hashReverse(a);