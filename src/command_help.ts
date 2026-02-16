import type { CLICommand } from "./registry_commands.js";

export function commandHelp(commands:Record<string,CLICommand>){
    console.log("Usage: ")
    console.log();
    for( const key in commands){
        console.log(`${key}: ${commands[key].description}`);
    }
    
    /*console.log("Closing the Pokedex... Goodbye");
    process.exit(0);
    */
    
}