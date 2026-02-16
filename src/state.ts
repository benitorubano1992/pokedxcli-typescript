import type {Interface} from "node:readline"
import { createInterface } from 'node:readline';
import { stdin, stdout } from 'node:process';
import { getCommands } from "./registry_commands.js";

export interface CLICommand{
    name:string,
    description:string,
    callback:(state:State)=>void
};
export interface State {
    rl:Interface,
    commands:Record<string,CLICommand>
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
        commands
    }

}