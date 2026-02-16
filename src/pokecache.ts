export type CacheEntry<T>={
    createdAt:number,
    val:T
}

export class Cache{
    #cache = new Map<string,CacheEntry<any>>();
    #reapIntervalId:NodeJS.Timeout | undefined;
    #interval:number;
    constructor(intervalNumber:number){
        this.#interval = intervalNumber;
        this.#startReapLoop();
    }

    add<T>(key:string,val:T){
        this.#cache.set(key,{
            val,
            createdAt:Date.now()
        })
    }
    get<T>(key:string){
        if (!this.#cache.get(key)){
            return undefined;
        }
        return this.#cache.get(key)?.val
    }
    #reap(){
        for (const [key,val] of this.#cache ){
            if( (Date.now()- this.#interval) > val.createdAt ){
                this.#cache.delete(key);
            }
        }
    }
    #startReapLoop(){
        this.#reapIntervalId = setInterval(()=>{
            this.#reap()
        },this.#interval)
    }
    stopReapLoop(){
        clearInterval(this.#reapIntervalId);
        this.#reapIntervalId = undefined;
    }
}