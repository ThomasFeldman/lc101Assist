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
// makeLine(3)

// Q2
function makeSquare(size){
  let lineSize = size;
  while(size>0){
    makeLine(lineSize);
    size = size-1;
  }
}
// makeSquare(4);

// Q3
function makeRectangle(width, height){
 while(height>0){
   makeLine(width);
   height=height-1;
 } 
}
// makeRectangle(5,3);

// Q4
function makeSquareEasy(size){
  makeRectangle(size, size);
}
// makeSquareEasy(6);

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
//  makeSpaceLine(3,5);

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
  let rowHeight = height
  let hash = 1;
  for(i=0; i<height; i++){
    console.log(' '.repeat(rowHeight) + '#'.repeat(hash));
    rowHeight = rowHeight-1;
    hash += 2;
  }
}
//makeIsoscelesTriangle(10);

// Part 3 Diamonds

function tri(height){
  //spaces will equal num
  let rowHeight = height
  let hash = 1;
  for(i=0; i<height; i++){
    console.log(' '.repeat(rowHeight) + '#'.repeat(hash));
    rowHeight = rowHeight-1;
    hash += 2;
  }
}


function triReverse(height){
  //spaces will equal num
  let triRevArr = []
  let rowHeight = height
  let hash = 1;
  for(i=0; i<height; i++){
    triRevArr.push(' '.repeat(rowHeight) + '#'.repeat(hash));
    rowHeight = rowHeight-1;
    hash += 2;
  }
  triRevArr = triRevArr.reverse();

  for(i=0; i<triRevArr.length; i++){
    console.log(triRevArr[i]);
  }
  
}

function diamond(height){
  tri(height);
  triReverse(height);
}

//  diamond(8);



//Bonus
function bonus(height, userChar){
  //spaces will equal num
  let rowHeight = height
  let hash = 1;
  for(i=0; i<height; i++){
    console.log(' '.repeat(rowHeight) + `${userChar}`.repeat(hash));
    rowHeight = rowHeight-1;
    hash += 2;
  }
}

//bonus(5, 'h');