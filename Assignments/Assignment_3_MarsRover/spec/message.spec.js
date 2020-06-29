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
 

});