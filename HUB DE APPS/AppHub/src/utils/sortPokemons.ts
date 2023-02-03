import { Pokemon, pokemonList } from "../pages/01.6.pokeapi/data";
let fList:Pokemon[]=[]
let superList:Pokemon[][]=[]
export const sortPokemons=(list:Pokemon[],form:string):Pokemon[]=>{
    fList=[]
    superList=[]
    if (form==='Id'){fList=pokemonList}
    if (form==='Name'){
        const nameList:string[]=list.map(pokemon=>pokemon.name).sort()
        superList=nameList.map(pokemonName=>list.filter(pokemon=>pokemon.name==pokemonName))
        for (const slist of superList){for (const pokemon of slist){fList.push(pokemon)}}
    }
    return fList
}