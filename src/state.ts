import type {Interface} from "node:readline"
import { createInterface } from 'node:readline';
import { stdin, stdout } from 'node:process';
import { getCommands } from "./registry_commands.js";
import { PokeApi } from "./pokeapi.js";
import { Cache } from "./pokecache.js";



export interface CLICommand{
    name:string,
    description:string,
    callback:(state:State,...otherInput:string[])=>Promise<void>
};
export interface State {
    rl:Interface,
    commands:Record<string,CLICommand>,
    client:PokeApi,
    nextLocationsURL?:string,
    prevLocationsURL?:string,
    cache:Cache
}

export function initState():State{
     const rl = createInterface({
        input: stdin,
        output: stdout,
        prompt: "Pokedex > "
    })
    const commands = getCommands() 
    return {
        rl,
        commands,
        client:new PokeApi(),
        cache:new Cache(5_0000)
    }

}