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

  // Part 2 Triangles
  // Q1   
  function makeDownwardStairs(height){

  }