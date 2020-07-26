class Rover {
  constructor(position) {
    this.position = position;
    this.mode = "NORMAL";
    this.generatorWatts = 110;
  }
    
  recieveMessage (message) {
    let response = {results:[]};
    response.message = message.name;
    let messageInput = message.commands;
    if (typeof(messageInput.length) === "undefined") {
      messageInput = [message.commands];
    }
    
    for (let i =0; i < messageInput.length; i++) {
      let messageName = messageInput[i].commandType
      let resultsObj = {
        message: messageName,
        completed: true,
        mode: this.mode,
        generatorWatts: this.generatorWatts,
        position: this.position
      }
      
      
      if (messageInput[i].commandType === "STATUS_CHECK") {
      } else if (messageInput[i].commandType === "MODE_CHANGE") {
        this.mode = messageInput[i].value
        resultsObj.mode = this.mode;
      } else if (messageInput[i].commandType === "MOVE" && this.mode === "LOW_POWER") {
        resultsObj.completed = false;
      } else if (messageInput[i].commandType === "MOVE" && this.mode === "NORMAL") {
        this.position = messageInput[i].value;
        resultsObj.position = this.position;
      } else {
        resultsObj.message = "unknown command";
        resultsObj.completed = false;
      }

      response.results.push(resultsObj);
    }

    return response;
  }
}

module.exports = Rover;