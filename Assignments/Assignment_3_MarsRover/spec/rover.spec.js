const assert = require('assert');
const Rover = require('../rover.js');

describe("Rover class", function() {

 //TEST 7
  it("constructor sets position and default values for mode and generatorWatts", function(){
    assert.strictEqual(new Rover(3).position, 3);
    assert.strictEqual(new Rover(3).mode, 'MODE');
    assert.strictEqual(new Rover(3).generatorWatts, 110);
  }); 

//TEST 8
  it("response returned by receiveMessage contains name of message", function(){
    assert.strictEqual(rover.recieveMessage('name').name, 'name');
  });

//TEST 9
  it("response returned by receiveMessage includes two results if two commands are sent in the message", function(){
    assert.strictEqual(rover.recieveMessage('name', 'MOVE', 'STOP').commands, ['MOVE', 'STOP']);
  });
//TEST 10
  it("responds correctly to status check command", function(){
    assert.strictEqual()
  });
//TEST 11
  it("responds correctly to mode change command", function(){
    assert.strictEqual()
  });
//TEST 12
  it("responds with false completed value when attempting to move in LOW_POWER mode", function(){
    assert.strictEqual()
  });
//TEST 13
  it("responds with position for move command", function(){
    assert.strictEqual()
  });
});






// Questions to ask Monique
    //How do I set up Rover class to return the recieve Message properly
    //Where do I set up the Command values at
    //Find out office hours
//How the commands should work
// //MOVE	Number representing the position the rover should move to.	position	{completed: true}
// STATUS_CHECK	No values sent with this command.	No updates	{completed: true, roverStatus: {mode: 'NORMAL', generatorWatts: 110, position: 87382098}} Values for mode, generatorWatts, position will depend on current state of rover.
// MODE_CHANGE	String representing rover mode (see modes)	mode	{completed: true}