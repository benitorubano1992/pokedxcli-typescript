export class PokeApi{
    private static readonly baseURL = "https://pokeapi.co/api/v2"

    async fetchLocations(url: string): Promise<ShallowLocations> {
    const resp = await fetch(url)
    if (!resp.ok){
        throw new Error(`error fetching url:${url}, staus:${resp.status}`)
    }
    return await resp.json()
}
   /*async fetchLocation(locationName: string): Promise<Location> {
    // implement this
  }*/
}

export type ShallowLocations={
    count:number,
    next:string,
    previous:string,
    results:LocationArea[]
}



export type LocationArea={
    name:string;
    url:string
}