import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMap } from "./command_map.js";
import { commandMapB } from "./command_mapb.js";

import type { CLICommand } from "./state.js";



/*export interface CLICommand{
    name:string,
    description:string,
    callback:(commands:Record<string,CLICommand>)=>void
};
*/

export function getCommands():Record<string,CLICommand>{
    return {
        "exit":{
            name:"exit",
            description:"Exits the pokedex",
            callback:commandExit
        },
        "help":{
            name:"help",
            description:"Displays a help message",
            callback:commandHelp
        },
        "map":{
            name:"map",
            description:"Get the next 20 locations_area",
            callback:commandMap
        },
        "mapb":{
            name:"mapb",
            description:"Get the previous 20 locations_area",
            callback:commandMapB
        }
    }
}
