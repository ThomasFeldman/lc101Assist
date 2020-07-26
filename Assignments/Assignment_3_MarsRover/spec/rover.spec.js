const assert = require('assert');
const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

describe("Rover class", function() {

  //TEST 7
  it("constructor sets position and default values for mode and generatorWatts", function() {
    //declare vars
    let rover = new Rover("3");
    
    //test
    assert.strictEqual(rover.position, "3");
    assert.strictEqual(rover.mode, "NORMAL");
    assert.strictEqual(rover.generatorWatts, 110);
  });


  //TEST 8
  it("response returned by receiveMessage contains name of message", function() {
    //declare vars
    let rover = new Rover("3");
    let command = new Command('MODE_CHANGE', 'LOW_POWER');
    let message = new Message("message", command);
    let response = rover.recieveMessage(message)
    
    //test
    assert.strictEqual(response.message, "message");
  });
  

  //TEST 9
  it("response returned by receiveMessage includes two results, if two commands are sent in message", function() {
    //declare vars
    let rover = new Rover("3");
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let message = new Message("message", commands);
    let response = rover.recieveMessage(message);
    
    //test
    assert.strictEqual(response.results.length, commands.length);
  });


  //TEST 10
  it("responds correctly to status check", function() {
    //declare vars
    let rover = new Rover("3");
    let command = new Command("STATUS_CHECK");
    let message = new Message("STATUS_CHECK", command);
    let response = rover.recieveMessage(message);

    //test
    assert.strictEqual(response.results[0].completed, true);
    assert.strictEqual(response.results[0].position, rover.position);
    assert.strictEqual(response.results[0].mode, rover.mode);
    assert.strictEqual(response.results[0].generatorWatts, rover.generatorWatts);
  });


  //TEST 11
  it("responds with correct status after MODE_CHANGE", function() {
    //declare vars
    let rover = new Rover("3");
    let command = new Command("MODE_CHANGE", "LOW_POWER");
    let message = new Message("MODE_CHANGE", command);
    let response = rover.recieveMessage(message);
    
    //test
    assert.strictEqual(response.results[0].completed, true);
    assert.strictEqual(rover.mode, command.value);
  });


  //TEST 12
  it("responds with false completed value, if attempt to move while in LOW_POWER mode", function() {
    //declare vars
    let rover = new Rover("3");
    let commands = [new Command("MODE_CHANGE", "LOW_POWER"), new Command("MOVE", "4")];
    let message = new Message("MODE_CHANGE and MOVE", commands);
    let response = rover.recieveMessage(message);
    
    //test
    assert.strictEqual(response.results[1].completed, false);
    assert.strictEqual(rover.position, "3");
  });


  //TEST 13
  it("responds with position for move command", function() {
    //declare vars
    let rover = new Rover("3");
    let command = new Command("MOVE", "4");
    let message = new Message("MOVE", command);
    let response = rover.recieveMessage(message);
    
    //test
    assert.strictEqual(response.results[0].completed, true);
    assert.strictEqual(rover.position, command.value);
  });


  //TEST 14
  it("responds with completed false and message 'unknown command'", function() {
    //declare vars
    let rover = new Rover("9.8.7");
    let command = new Command("FLY_HOME", "Take off Initiated!");
    let message = new Message("FLY_HOME", command);
    let response = rover.recieveMessage(message);
    
    //test
    assert.strictEqual(response.results[0].completed, false);
    assert.strictEqual(response.results[0].message, "unknown command");
  });

});