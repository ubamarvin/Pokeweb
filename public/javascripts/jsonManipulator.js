//jsonManipulator.js

//This file will contain functions and classes whos job it is
//to manipulate the JSON object accordingly
//Since it i will be used over many classes it should be an
//singleton object

//it should contain a function responsible for manipulating the json object

import webSocketManager from "./webSocketManager.js";



class JsonManipulator {
    constructor() { 
    }
    // "Mimicks" the handle Input.
    // HandleInput only needs the State and the Input to execute the proper actions
    manipulateJson(data,choice ){
        const state = data.state.type;
        //depending in which state, different manipulators are invoked
        if(state === "PickPokemonState") {
            this.pickPokemonManipulator(data, choice);
        }
        if(state === "MainState"){
            this.mainManipulator(data, choice);
            console.log("calling mainMani")
        }
        if(state === "ChooseAttackState"){
            this.chooseAttackManipulator(data, choice);
        }
        if(state === "SwitchPokemonState"){
            
        }
    }

    pickPokemonManipulator(data, choice) {
        //find the choice in data.state.pokedex save in variable choosenPoke
        let choosenPokemon = data.state.pokedex.pokedex.available_pokemon.find(pokemon => pokemon.name === choice)
        if(choosenPokemon === null || choosenPokemon === undefined){
            console.log(`PickpokemonState Add ${choice} not found in pokedex`);
            return;
        }

        //delete choice from data.state.pokedex
        let updPokedex = data.state.pokedex.pokedex.available_pokemon.filter(pokemon => pokemon.name !== choice);
        data.state.pokedex.pokedex.available_pokemon = updPokedex;
        // Check if deleted
        if(data.state.pokedex.pokedex.available_pokemon.find(pokemon => pokemon.name === choice) !== undefined){
                console.log(`PickPokemonState Delete ${choice} was not deleted`);
            }

        //add choosen Poke to data.player.pokemons array
        data.state.player.pokemons.push(choosenPokemon);
        if(data.state.player.pokemons.find(pokemon => pokemon.name == choice) === undefined) {
                console.log(`PickPokemonState ${choice} was not added to player.pokemons[]`)
            }

        // Update picks of player

        
        data.state.picks++;
        let picks = data.state.picks;
        console.log("pick " + picks);


        
        if (picks >= 1) {
            console.log("Picks >= 1")
            data.state.type = "MainState";
            data.state["roundReport"] = "";
            let currentPokemon = data.state.player.pokemons.shift();
            data.state.player.currentPokemon = currentPokemon
        }

        //Stringify
        let updData = JSON.stringify(data);
        // Post updated data to server

        this.postUpdatedJson(updData);

    }

    mainManipulator(data, choice){
        data.state.type = choice
        let updData = JSON.stringify(data);
        this.postUpdatedJson(updData, choice);
    }

    chooseAttackManipulator(data, choice) {
      let move = data.state.player.currentPokemon.moves.find(move => move.name === choice)
      if(move === undefined){
        console.err("Move not found");
        return;
      }
      console.log("choosen move:", move)
      console.log("Choice\n",JSON.stringify(data.state.player.choice, null,2));
      data.state.player.choice = {
        attackChoice: move
      };
      console.log("Updated Choice: \n "+JSON.stringify(data.state.player.choice, null,2));

      data.state.type = "BattleEvalState";
      console.log("Updated Choice after changing data.state.type: \n "+JSON.stringify(data.state.player.choice, null,2));

      data.state.player.currentPokemon.currentMove = move;
      console.log("Updated player after changing ...currentMove: \n "+JSON.stringify(data.state.player, null,2));


      let updData = JSON.stringify(data);
      console.log(updData);
      this.postUpdatedJson(updData);
      //also post a random letter

    }

    postUpdatedJson = (data) => {
      console.log("sending to server");
      const obj = JSON.parse(data)
      console.log(JSON.stringify(obj, null,2));
      webSocketManager.sendMessage(data);
    }

    /*
    async postUpdatedJson(updData) {
        try {
          const response = await fetch('http://localhost:9000/json', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: updData 
          });
    
          if (!response.ok) {
            throw new Error(`Server Error: ${response.status}`);
          }
      
          const contentType = response.headers.get("content-type");
          if (contentType && contentType.includes("application/json")) {
            const responseData = await response.json();
            console.log("Success:", responseData);
            return responseData;
          } else {
            throw new Error("Response is not JSON");
          }
        } catch (error) {
          console.error("Error:", error);
        }
      }
        */
      

   
        



  
    
// for some magical reason parantheses are needed here...
}
const jsonManipulator = new JsonManipulator();


export default jsonManipulator;