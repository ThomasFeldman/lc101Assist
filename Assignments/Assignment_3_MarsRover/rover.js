class Rover{
    constructor(position, generatorWatts=110){
      this.position = position;
      this.mode = 'NORMAL';
      this.generatorWatts = generatorWatts;
    }
  
  
    receiveMessage(message){
      console.log(message);
    }
  }
  
//   const myCommandObject = new Command('MY_COMMAND_TYPE', 'MY_VALUE')
  
//   myCommandObject.recieveMessage('Hi Mom!');
  
  module.exports = Rover;