import type { State } from "./state";
import type {RespLocation,PokemonEncounter} from "./pokeapi"

export async function commandExpolore(state:State,...otherInput:string[]) {
    if (otherInput.length!== 1){
        throw new Error("invalid call of explore method, it requires 1 input after explore")
    } 
    
    let location_area = otherInput[0];
    console.log(`Exploring ${location_area}...`);
    let result = state.cache.get(location_area);
    let resultPokemon:PokemonEncounter[]=[];
    if(result === undefined){
        const respLocationObj = await state.client.fetchLocation(location_area);
        state.cache.add(location_area,respLocationObj);
        resultPokemon = respLocationObj.pokemon_encounters;
    }
    else{
        resultPokemon = (result as RespLocation).pokemon_encounters;
    }
    console.log('Found Pokemon:')

    resultPokemon.forEach((pk)=>{
        console.log(` - ${pk.pokemon.name}`);
    })


}