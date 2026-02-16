import type {State} from "./state.js";

export function commandHelp(state:State){
    console.log("Usage: ")
    console.log();
    for( const key in state.commands){
        console.log(`${key}: ${state.commands[key].description}`);
    }

    /*console.log("Closing the Pokedex... Goodbye");
    process.exit(0);
    */
    
}