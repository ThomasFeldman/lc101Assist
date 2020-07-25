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



//Read Chapters Tonight


// Questions to ask Monique
    //How do I set up Rover class to return the recieve Message properly
    //Where do I set up the Command values at
    //Find out office hours
//How the commands should work
// //MOVE	Number representing the position the rover should move to.	position	{completed: true}
// STATUS_CHECK	No values sent with this command.	No updates	{completed: true, roverStatus: {mode: 'NORMAL', generatorWatts: 110, position: 87382098}} Values for mode, generatorWatts, position will depend on current state of rover.
// MODE_CHANGE	String representing rover mode (see modes)	mode	{completed: true}





// const assert = require('assert');
// const Rover = require('../rover.js');
// const Message = require('../message.js');
// const Command = require('../command.js');

// describe("Rover class", function() {

//   it("constructor sets position and default values for mode and generatorWatts", function() {
//     let testRover = new Rover("9.8.7");
//     assert.strictEqual(testRover.position, "9.8.7");
//     assert.strictEqual(testRover.mode, "NORMAL");
//     assert.strictEqual(testRover.generatorWatts, 110);
//   });

//   it("response returned by receiveMessage contains name of message", function() {
//     let testRover = new Rover("9.8.7");
//     let command1 = new Command("test1", "value1");
//     let testMessage = new Message("messageName", command1);
//     let testOutput = testRover.recieveMessage(testMessage)
//     assert.strictEqual(testOutput.message, "messageName");
//   });

//   it("response returned by receiveMessage includes two results, if two commands are sent in message", function() {
//     let testRover = new Rover("9.8.7");
//     let command1 = new Command("test1", "value1");
//     let command2 = new Command("test2", "value2");
//     let commands = [command1, command2];
//     let testMessage = new Message("messageName", commands);
//     let testResults = testRover.recieveMessage(testMessage);
//     assert.strictEqual(testResults.results.length, commands.length);
//   });

//   it("responds correctly to status check", function() {
//     let testRover = new Rover("9.8.7");
//     let command1 = new Command("STATUS_CHECK");
//     let testMessage = new Message("STATUS_CHECK", command1);
//     let messageRecieved = testRover.recieveMessage(testMessage);
//     assert.strictEqual(messageRecieved.results[0].completed, true);
//     assert.strictEqual(messageRecieved.results[0].position, testRover.position);
//     assert.strictEqual(messageRecieved.results[0].mode, testRover.mode);
//     assert.strictEqual(messageRecieved.results[0].generatorWatts, testRover.generatorWatts);
//   });

//   it("responds with correct status after MODE_CHANGE", function() {
//     let testRover = new Rover("9.8.7");
//     let command1 = new Command("MODE_CHANGE", "LOW_POWER");
//     let testMessage = new Message("MODE_CHANGE", command1);
//     let messageRecieved = testRover.recieveMessage(testMessage);
//     assert.strictEqual(messageRecieved.results[0].completed, true);
//     assert.strictEqual(testRover.mode, command1.value);
//   });

//   it("responds with false completed value, if attempt to move while in LOW_POWER mode", function() {
//     let testRover = new Rover("9.8.7");
//     let command1 = new Command("MODE_CHANGE", "LOW_POWER");
//     let command2 = new Command("MOVE", "9.8.7.6");
//     let commands = [command1, command2];
//     let testMessage = new Message("MODE_CHANGE and MOVE", commands);
//     let messageRecieved = testRover.recieveMessage(testMessage);
//     assert.strictEqual(messageRecieved.results[1].completed, false);
//     assert.strictEqual(testRover.position, "9.8.7");
//   });

//   it("responds with position for move command", function() {
//     let testRover = new Rover("9.8.7");
//     let command1 = new Command("MOVE", "9.8.7.6");
//     let testMessage = new Message("MOVE", command1);
//     let messageRecieved = testRover.recieveMessage(testMessage);
//     assert.strictEqual(messageRecieved.results[0].completed, true);
//     assert.strictEqual(testRover.position, command1.value);
//   });

//   it("responds with completed false and message 'unknown command'", function() {
//     let testRover = new Rover("9.8.7");
//     let command1 = new Command("FLY_HOME", "Take off Initiated!");
//     let testMessage = new Message("FLY_HOME", command1);
//     let messageRecieved = testRover.recieveMessage(testMessage);
//     assert.strictEqual(messageRecieved.results[0].completed, false);
//     assert.strictEqual(messageRecieved.results[0].message, "unknown command");
//   });

// });