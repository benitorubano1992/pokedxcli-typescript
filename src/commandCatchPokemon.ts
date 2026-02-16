import type { State } from "./state";
import type { PokemonApi } from "./pokemontypes";
export async function commandCatchPokemon(state:State,...otherInput:string[]) {
    if (otherInput.length !== 1){
        throw new Error(`cacth required 1 other input, the ppokemon Name`)
    }
    
    const [pokemonName,...rest] = otherInput;
    console.log(`Throwing a Pokeball at ${pokemonName}...`)
    let result:PokemonApi=state.cache.get(pokemonName);
    if (result === undefined){
        const respApiPk = await state.client.fetchPokemonByName(pokemonName);
        state.cache.add(pokemonName,respApiPk);
        result = respApiPk
    }
    const rndVal = getRandomArbitrary(0,10);
    let consoleCt = `${pokemonName} escaped`
    if (rndVal > 5){
        state.pokedex[pokemonName]= result;
        consoleCt=`${pokemonName} was caught!`;
    }
    console.log(consoleCt);



}

function getRandomArbitrary(min:number, max:number) {
  return Math.random() * (max - min) + min;
}