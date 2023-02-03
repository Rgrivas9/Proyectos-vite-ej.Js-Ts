import { Pokemon, pokemonList } from "../pages/01.6.pokeapi/data";

export const filterPokemonsName = (
  list: Pokemon[],
  value: string
): Pokemon[] => {
  const fList: Pokemon[] = list.filter((pokemon) =>
    pokemon.name.includes(value.toLowerCase())
  );
  return fList;
};
let types: string = "";
let fList: Pokemon[] = [];

export const filterPokemonsType = (
  list: Pokemon[],
  value: string
): Pokemon[] => {
  if (value.includes("/")) {
    types = value.split("/").join("");
    fList = list.filter((pokemon) => pokemon.type.join("") == types);
  } 
  if (value.includes('/')===false){
    fList = list.filter((pokemon) => pokemon.type.join("") == value);
  }
  if (value ==='All') {
    fList=pokemonList
  }

  return fList;
};
