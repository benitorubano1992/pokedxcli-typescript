import type {State} from "./state.js";

export async function commandHelp(state:State,...otherInput:string[]):Promise<void>{
    console.log("Usage: ")
    console.log();
    for( const key in state.commands){
        console.log(`${key}: ${state.commands[key].description}`);
    }

    /*console.log("Closing the Pokedex... Goodbye");
    process.exit(0);
    */
    
}