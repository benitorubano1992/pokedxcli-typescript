import type { State } from "./state";
import type { ShallowLocations,Location } from "./pokeapi";
export async function commandMap(state:State,...otherInput:string[]):Promise<void> {
   let url = state.nextLocationsURL ?? "https://pokeapi.co/api/v2/location-area/";
       let result = state.cache.get(url);
        let locationArr:Location[]=[];
       if(result === undefined){
        console.log(`not found key ${url} in the cache`);  
        const locationsResult = await state.client.fetchLocations(url);
          state.cache.add(url,locationsResult);
          state.nextLocationsURL = locationsResult.next;
          state.prevLocationsURL = locationsResult.previous;
            locationArr = locationsResult.results
        }else{
            locationArr = (result as ShallowLocations).results;
        }
      
      
      locationArr.forEach((loc)=>{
          console.log(loc.name)
      });




}


