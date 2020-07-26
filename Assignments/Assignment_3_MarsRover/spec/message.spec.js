const assert = require('assert');
const Message = require('../message.js');
const Command = require('../command.js');

describe("Message class", function() {

  it("throws error if name is NOT passed into constructor as the first parameter", function() {
    assert.throws(
      function() {
        new Message();
      },
      {
        message: 'Name required.'
      }
    );  
  });

  it("constructor sets name",function(){
    assert.strictEqual(new Message('Abbi').name, 'Abbi');
  });

  it("contains a commands array passed into the constructor as 2nd argument",function(){
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    assert.strictEqual(new Message('Abbi', commands).commands, commands);
  });

});