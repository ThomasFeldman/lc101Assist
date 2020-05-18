//  Q1
let practiceFile = [273.15];
practiceFile.push(42);
practiceFile.push("hello");
practiceFile.push(false, -4.6, "87");
console.log(practiceFile);

//  Q2
//a)
let cargoHold = ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket'];
cargoHold.splice(5,1,'space tether');
console.log(cargoHold);
//b)
cargoHold.pop();
console.log(cargoHold);
//c)
cargoHold.shift();
console.log(cargoHold);
//d)
cargoHold.push("20 meters");
cargoHold.unshift(1138);
console.log(cargoHold);
//e)
console.log(`The cargo hold contains : ${cargoHold}, and is ${cargoHold.length} items long.`)

//  Q3

//a)
cargoHold.splice(3,0,'keys');
console.log(cargoHold);
//b)
cargoHold.splice(
        cargoHold.indexOf('instruction manual'),
        1
);
console.log(cargoHold);
//c)
cargoHold.splice(2,3, 'cat', 'fob', 'string cheese');
console.log(cargoHold);

// Q4
let holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23];
let holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];
//a)
holdCabinet1.concat(holdCabinet2);
console.log(holdCabinet1);
//b)
holdCabinet1.splice(0,2);
holdCabinet2.splice(0,2);
console.log(holdCabinet1);
console.log(holdCabinet2);

//c)
holdCabinet1.reverse();
console.log(holdCabinet1);

holdCabinet2.sort();
console.log(holdCabinet2);

//  Q5

//a)
let str = 'In space, no one can hear you code.';
console.log(str.split());
console.log(str.split('e'));
console.log(str.split(' '));
console.log(str.split(''));
//b)
let arr = ['B', 'n', 'n', 5];
console.log(arr.join());
console.log(arr.join('a'));
console.log(arr.join(' '));
console.log(arr.join(''));
//c)
//Not within a console.log statement, if you set str = to str.split then yes, same with arrays but then you would be changing the original value not the methods themselves
//d)
let str = "water,space suits,food,plasma sword,batteries";
str = str.split(',');
str = str.sort();
str = str.join(', ');
console.log(str);

//  Q6

//a)
let element1 = ['hydrogen', 'H', 1.008];
let element2 = ['helium', 'He', 4.003];
let element26 = ['iron', 'Fe', 55.85];
//b)
let table = [];
table.push(element1, element2, element26);
console.log(table);
//c)
console.log(table[1]);
console.log(table[1][1]);
//d)
console.log(table[0][2]);
console.log(table[1][0]);
console.log(table[2][1]);

//e)
let threeDArray = [['apple', [1, 2, 3], 'banana'],
                   [['a','s','d','f'],['q','w','e','r','t','y']],
                   ['dogs run', 'cats jump', ['arrays array']]];
console.log(threeDArray[0][1][2]);