import type{ State } from "./state";

export async function  commandInspectPk(state:State,...otherInput:string[]) {
     if (otherInput.length!== 1){
        throw new Error("invalid call of inspect method, it requires 1 input after explore")
    } 
    
    let pkName = otherInput[0];
    let pokemon = state.pokedex[pkName];
    if(pokemon === undefined){
        console.log("you have not caught that pokemon");
    }
    console.log(`Name: ${pokemon.name}`);
    console.log(`Height: ${pokemon.height}`);
    console.log(`Weight: ${pokemon.weight}`);
    console.log("Stats: ")
    pokemon.stats.forEach((stat)=>{
        console.log(` -${stat.stat.name}: ${stat.base_stat}`);
    })
    console.log("Types:")
    pokemon.types.forEach((type)=>{
        console.log(` - ${type.type.name}`)
    })
    
}