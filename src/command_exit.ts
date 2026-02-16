import type { State } from "./state.js";


export async function commandExit(state:State,...otherInput:string[]):Promise<void>{
    console.log("Closing the Pokedex... Goodbye");
    state.rl.close();
    state.cache.stopReapLoop();
    process.exit(0);
}