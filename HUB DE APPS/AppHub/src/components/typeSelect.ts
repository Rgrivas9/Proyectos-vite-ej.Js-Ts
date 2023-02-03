import { pokemonList } from "../pages/01.6.pokeapi/data";

const typelist: string[][] = [];
const types: string[][] = [];
for (const pokemon of pokemonList) {
  typelist.push(pokemon.type);
}
let index = 0;
typelist.sort();
for (const type of typelist) {
  index++;
  if (index != typelist.length) {
    if (type[0] !== typelist[index][0] || type[1] !== typelist[index][1]) {
      types.push(type);
    }
  }
}

export const typeSelect = (): HTMLSelectElement => {
  const select: HTMLSelectElement = document.createElement("select");
  const option:HTMLOptionElement = document.createElement('option')
  option.innerHTML='All'
  select.appendChild(option)
  for (const type of types){
    const option:HTMLOptionElement = document.createElement('option')
    if (type.length===1){option.innerHTML=`${type[0]}`};
    if (type.length===2){option.innerHTML=`${type[0]}/${type[1]}`};
    select.appendChild(option)
  }
  return select
};
