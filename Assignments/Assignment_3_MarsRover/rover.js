class Rover{
    constructor(position, generatorWatts=110){
      this.position = position;
      this.mode = 'NORMAL';
      this.generatorWatts = generatorWatts;
    }
  
  
    receiveMessage(message){
        this.message = message.name;
        this.commands = message.commands;
        return [message, commands];
      }
      
    }
    
    
    // Going to talk to TA tomorrow and hopefully finish this damn project soon

    
    // const myCommandObject = new Command('MY_COMMAND_TYPE', 'MY_VALUE')
    
    // myCommandObject.recieveMessage('Hi Mom!');
    
    module.exports = Rover;