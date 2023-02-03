export const num: number = 0;
import { character } from "../../utils/getChar";
interface Stats {
  name: string;
  base: number;
}
export interface Hability {
  name: string;
  description: string;
}
export interface Moves {
  name: string;
  type: string;
  accuracy: any;
}
export interface Images {
  front: string;
  back: string;
  main: string;
  shiny: string;
}
export interface Pokemon {
  name: string;
  id: number;
  height: number;
  weight: number;
  stats: Stats[];
  type: string[];
  habilities: Hability[];
  moves: Moves[];
  images: Images;
}

const getPokemons = async () => {
  let n: number = 0;
  const pokemonList: Pokemon[] = [] as Pokemon[];
  while (n < 151) {
    n++;
    const pokemon: Pokemon = await character(n);
    pokemonList.push(pokemon);
  }
  return pokemonList;
};
export const pokemonList:Pokemon[]=await getPokemons()
