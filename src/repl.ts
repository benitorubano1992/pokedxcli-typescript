import { createInterface } from 'node:readline';
import { stdin, stdout } from 'node:process';

export function cleanInput(input: string): string[] {
    let cleanStringArr = input.trim().toLowerCase().replaceAll(/\s+/g, ' ')
    return cleanStringArr.split(' ');

}

export function startREPL() {
    const rl = createInterface({
        input: stdin,
        output: stdout,
        prompt: "Pokedex > "
    })
    rl.prompt()
    rl.on("line", (input) => {
        const inputArr = cleanInput(input);
        if (inputArr.length > 0) {
            console.log(`Your command was: ${inputArr[0]}`);
        }
        rl.prompt()

    })


}

