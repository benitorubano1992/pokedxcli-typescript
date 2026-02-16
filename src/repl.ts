import { getCommands } from './registry_commands.js';
import { initState } from './state.js';

export function cleanInput(input: string): string[] {
    let cleanStringArr = input.trim().toLowerCase().replaceAll(/\s+/g, ' ')
    return cleanStringArr.split(' ');

}

export function startREPL() {
    const stateRepl = initState();
    stateRepl.rl.prompt()
    stateRepl.rl.on("line", (input) => {
        const inputArr = cleanInput(input);
        if (inputArr.length > 0) {
            let command = inputArr[0];
            const cliCommand = stateRepl.commands[command];
            if (cliCommand === undefined){
                console.log("Unknown command")
            }else{
                cliCommand.callback(stateRepl);
            }

        }
        stateRepl.rl.prompt()

    })


}

