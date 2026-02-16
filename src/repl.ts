import { createInterface } from 'node:readline';
import { stdin, stdout } from 'node:process';
import { getCommands } from './registry_commands.js';

export function cleanInput(input: string): string[] {
    let cleanStringArr = input.trim().toLowerCase().replaceAll(/\s+/g, ' ')
    return cleanStringArr.split(' ');

}

export function startREPL() {
    const commands = getCommands();
    
    const rl = createInterface({
        input: stdin,
        output: stdout,
        prompt: "Pokedex > "
    })
    rl.prompt()
    rl.on("line", (input) => {
        const inputArr = cleanInput(input);
        if (inputArr.length > 0) {
            let command = inputArr[0];
            const cliCommand = commands[command];
            if (cliCommand === undefined){
                console.log("Unknown command")
            }else{
                cliCommand.callback(commands);
            }

        }
        rl.prompt()

    })


}

