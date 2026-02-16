import  type {State} from "./state";
export async function commandPokedex(state:State,...otherInput:string[]) {
    let result = "";
    
    for(let key in state.pokedex){
        result+=` - ${key}\n`
    }
    if (result.length === 0){
        result ="Pokedex is empty";
    }else{
        result=`Your Pokedex:\n${result}`;
    }
    console.log(result);
}