class Message {
  
    // let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
  
    // let message = new Message('Test message with two commands', commands);
  
    constructor(name, commands){
      this.name = name;
      if (!name) {
        throw Error("Name required.");
      }

      this.description = name;
    }
  }
  
  module.exports = Message;