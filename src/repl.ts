import { initState } from './state.js';

export function cleanInput(input: string): string[] {
    let cleanStringArr = input.trim().toLowerCase().replaceAll(/\s+/g, ' ')
    return cleanStringArr.split(' ');

}

export async function startREPL() {
    const stateRepl = initState();
    stateRepl.rl.prompt()
    stateRepl.rl.on("line", async(input) => {
        const inputArr = cleanInput(input);
        try{
            if (inputArr.length > 0) {
            
            const [command,...restInput] = inputArr;
            const cliCommand = stateRepl.commands[command];
            if (cliCommand === undefined){
                console.log("Unknown command")
            }else{
                await cliCommand.callback(stateRepl,...restInput);
            }

        }
        stateRepl.rl.prompt()
        }
        catch(error){
            if (error instanceof Error){
                console.log(error.message)
            }
        }
        
        

    })


}

