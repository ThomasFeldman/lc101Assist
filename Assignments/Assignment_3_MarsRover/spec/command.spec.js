const assert = require('assert');
const Command = require('../command.js');

describe("Command class", function() {

  it("throws error if command type is NOT passed into constructor as the first parameter", function() {
    assert.throws(
      function() {
        new Command();
      },
      {
        message: 'Command type required.'
      }
    );
  });

  it("constructor sets command type", function(){
    assert.strictEqual(new Command('MOVE').commandType, 'MOVE');
  });

  it("constructor sets a value passed in as the 2nd argument", function(){
    assert.strictEqual(new Message('MOVE', 3).value, 3);
  });

});