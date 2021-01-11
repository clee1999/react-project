window.onload = function() {
    console.log('hello world'); 

    // Mario Kart Exo 
    function Pilote(name) {
        let prevState = undefined;
        let state = {
          state: undefined,
          origin: undefined,
          position: undefined,
        };
      
        this.receiveData = (event) => {
          prevState = Object.assign({}, state);
          state.state = event.state;
          state.origin = event.origin;
          state.position = event.position;
        };
      
        this.getState = () => state.state;
      
        this.speak = () => {
          switch (state.state) {
            case "ready":
              return `Here we go! I'm ${name}`;
            case "happy":
              return "Let's have some fun!";
            case "sad":
              return `Outch!!! Damn ${state.origin}`;
            case "normal":
              return "";
            case "finish":
              switch (state.position) {
                case 1:
                  return "I'm the best";
                case 2:
                  return "Could be the best";
                default:
                  return "Will be better next time";
              }
              break;
          }
        };
      
        this.needUpdate = () => JSON.stringify(prevState) !== JSON.stringify(state);
      }
      
      const pilote = new Pilote("Mario");
      
      pilote.receiveData({ state: "ready" });
      if (pilote.needUpdate()) console.log("Speak ready", pilote.speak());
      pilote.receiveData({ state: "normal" });
      if (pilote.needUpdate()) console.log("Speak normal", pilote.speak());
      pilote.receiveData({ state: "normal" });
      if (pilote.needUpdate()) console.log("Speak normal", pilote.speak());
      pilote.receiveData({ state: "happy" });
      if (pilote.needUpdate()) console.log("Speak happy", pilote.speak());
      pilote.receiveData({ state: "sad", origin: "Luigi" });
      if (pilote.needUpdate()) console.log("Speak sad", pilote.speak());
      pilote.receiveData({ state: "finish", position: 1 });
      if (pilote.needUpdate()) console.log("Speak finish", pilote.speak());
      pilote.receiveData({ state: "finish", position: 1 });
      if (pilote.needUpdate()) console.log("Speak finish", pilote.speak());
  };
