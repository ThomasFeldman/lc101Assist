//Part One
//  Q1
//  Identify the result for each of the following statements:
//      'JavaScript'[8]
//      "Strings are sequences of characters."[5]
//      "Wonderful".length
//      "Do spaces count?".length
//      There's no code snippet for this one, just try it on your own with old-fashioned pen and paper!
console.log("p");
console.log("g");
console.log("9");
console.log("16");

//  Q2
let num = 1001;
//a)
num = num.toString();
//b)
let decNum = 123.45;
decNum = decNum.toString();
decNum.replace(".", "");
console.log(decNum.length);
//c
if(num.includes(".")){
    num = num.replace(".", "");
    console.log(num.length);
}else{
    console.log(num.length);
}


//Part Two
//  Q1
let dna = " TCG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT    "
//a)
dna = dna.trim();
//b)
dna = dna.toUpperCase;
//c)
console.log(dna);

//  Q2
//a)
dna = dna.replace("GCT", "AGG");
console.log(dna);
//b)
if (dna.indexOf("CAT") >= 0){
    console.log("CAT gene found");
}else {
    console.log("CAT gene NOT found");
}
//c) 
console.log(dna.slice(16,19));
//d)
console.log(`The DNA string is ${dna.length} characters long.`);
//e)
let bonus = (dna.slice(4,7) + "O" + " " + dna.slice(40,43));
bonus = bonus.toLowerCase();
console.log(`${bonus}`);

//Part Three
//  Q1
//a)
let language = "JavaScript";
abbreviation = (language.slice(0,1) + language.slice(4,5));
console.log(abbreviation); 
//b)
language = "JavaScript";
console.log(language.replace("ava", "").replace("cript", ""));
//c)
console.log(`The abbreviation for '${language}' is '${abbreviation}'`)
//d)
bonus = language.replace(language, language.toLowerCase().slice(6,9));
console.log(bonus);

//  Q2
const input = require("readline-sync");
let notTitle = input.question("Enter two words: ");
let space = notTitle.indexOf(" ");
console.log(notTitle.replace(notTitle.charAt(0), notTitle.charAt(0).toUpperCase()).replace(notTitle.charAt(space+1), notTitle.charAt(space+1).toUpperCase()));