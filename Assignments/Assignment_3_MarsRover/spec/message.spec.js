const assert = require('assert');
const Message = require('../message.js');

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
    assert.strictEqual(new Message('name').description, 'name');
  });

  it("throws error if a name is NOT passed into the constructor as the first parameter",function(){
    assert.strictEqual(new Message('name').name, 'name');
  });

});