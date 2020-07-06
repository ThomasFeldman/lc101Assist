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