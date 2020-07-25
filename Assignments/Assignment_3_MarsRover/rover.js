class Rover{
  constructor(position, generatorWatts=110){
    this.position = position;
    this.mode = 'NORMAL';
    this.generatorWatts = generatorWatts;
  }

  receiveMessage(message){

    let response = {
      message: message.name,
      results: message.commands    
    }
    
    console.log(message.commands);
    console.log(message);

    
    return response;

  }

     // this.results = results.concat(message.commands);

    // if(results.contains('MOVE')){
    //   this.position = results[1];
    //   return '{completed: true}';
    // }else if(results.contains('STATUS_CHECK')){
    //   let rover = new Rover(message.position);
    //   return `{completed: true, roverStatus: ${rover}}`;
    // }else if(results.contains('MODE_CHANGE')){
    //   this.mode = results[0]
    //   return '{completed: true}';
    // }else{

    // }
}
  


// const myCommandObject = new Command('MY_COMMAND_TYPE', 'MY_VALUE')

// myCommandObject.recieveMessage('Hi Mom!');
    
    // Going to talk to TA tomorrow and hopefully finish this damn project soon

    
    // const myCommandObject = new Command('MY_COMMAND_TYPE', 'MY_VALUE')
    
    // myCommandObject.recieveMessage('Hi Mom!');
    
    module.exports = Rover;








//     /**
//  * This Class takes one argument (position), it has 3 attributes
//  * position, mode(a string, default NORMAL), 
//  * and generatorWatts (a number default 110). 
//  * This class also has 1 method recieveMessage which
//  * takes in a Message Class object and updates the 3 attributes
//  * according to the commands passed in the Message Object
//  */
// class Rover {
//   constructor(position) {
//     this.position = position;
//     this.mode = "NORMAL";
//     this.generatorWatts = 110;
//   }
    
//   /**
//    * This method takes in a Message Object and updates the 3 attributes
//    * according to the commands passed in the Message Object
//    */
//   recieveMessage (message) {
//     // an empty object to be filled with results 
//     // data generated bt the commands passed in the Message Object
//     let output = {results:[]};
//     output.message = message.name;
//     // it nessary to check length of commands to run the for loop
//     let messageContents = message.commands;
//     if (typeof(messageContents.length) === "undefined") {
//       messageContents = [message.commands];
//     }
//     // go through the commands and run each one
//     for (let i =0; i < messageContents.length; i++) {
//       let messageName = messageContents[i].commandType
//       // default results to be updated as needed for each command
//       let resultsObj = {
//         message: messageName,
//         completed: true,
//         mode: this.mode,
//         generatorWatts: this.generatorWatts,
//         position: this.position
//       }
//       // the default results Object meets the requirements 
//       // for "STATUS_CHECK"
//       if (messageContents[i].commandType === "STATUS_CHECK") {
//         ;//pass
//       } else if (messageContents[i].commandType === "MODE_CHANGE") {
//         // updates the rover's mode
//         this.mode = messageContents[i].value
//         // updates the value of the resultsObj mode
//         resultsObj.mode = this.mode;
//         // if there is not enough power to move
//       } else if (messageContents[i].commandType === "MOVE" && this.mode === "LOW_POWER") {
//         // could not move, did not change the rover's position
//         resultsObj.completed = false;
//         // if there is enough power to change the rover's position
//       } else if (messageContents[i].commandType === "MOVE" && this.mode === "NORMAL") {
//         // update the rover's position
//         this.position = messageContents[i].value;
//         // updates the value of the resultsObj position
//         resultsObj.position = this.position;
//         // not a recognived command
//       } else {
//         // updates the value of the resultsObj message
//         resultsObj.message = "unknown command";
//         // updates the value of the resultsObj completed
//         resultsObj.completed = false;
//       }
//     // puts the current results in the output object 
//     // with the key = to the command name passed into the 
//     // Command Object
//     output.results.push(resultsObj);
//     // go back and run more commands if present
//     }
//   // returns the output object with {"commandname": {resultsObj}}
//   return output;
//   }
// }

// module.exports = Rover;