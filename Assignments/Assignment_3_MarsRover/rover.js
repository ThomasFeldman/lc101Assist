class Rover{
  constructor(position, generatorWatts=110){
    this.position = position;
    this.mode = 'NORMAL';
    this.generatorWatts = generatorWatts;
  }

  receiveMessage(message){
    this.message = message.name;

    this.results = results.concat(message.commands);

    if(results.contains('MOVE')){
      this.position = results[1];
      return '{completed: true}';
    }else if(results.contains('STATUS_CHECK')){
      let rover = new Rover(message.position);
      return `{completed: true, roverStatus: ${rover}}`;
    }else if(results.contains('MODE_CHANGE')){
      this.mode = results[0]
      return '{completed: true}';
    }else{

    }
  }
  
}



// const myCommandObject = new Command('MY_COMMAND_TYPE', 'MY_VALUE')

// myCommandObject.recieveMessage('Hi Mom!');

module.exports = Rover;
    
    // Going to talk to TA tomorrow and hopefully finish this damn project soon

    
    // const myCommandObject = new Command('MY_COMMAND_TYPE', 'MY_VALUE')
    
    // myCommandObject.recieveMessage('Hi Mom!');
    
    module.exports = Rover;