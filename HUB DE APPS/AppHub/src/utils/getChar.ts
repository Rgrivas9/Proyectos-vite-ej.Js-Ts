interface Stats {
  name: string;
  base: number;
}
interface Hability {
  name: string;
  description: string;
}
interface Moves {
  name: string;
  type: string;
  accuracy: any;
}
interface Images {
  front: string;
  back: string;
  main: string;
  shiny: string;
}
interface Pokemon {
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
/* ----------------------------------------------------------------------------FETCH AL POKEMON */
export const getCharacter = async (n: number): Promise<any> => {
  const data: Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${n}/`);
  const json: any = await data.json();
  return json;      
};
/* ------------------------------------------ESTO SACA DOS LISTAS , TIPO DEL ATAQUE Y ACCURACY DE OTRO FETCH A LA URL DE LOS 3 PRIMEROS ATAQUES */
export const getMoveTypes = async (list: string[]): Promise<string[][]> => {
  const typeList: string[] = [];
  const accList = [];
  for (const url of list) {
    const type = await getType(url);
    typeList.push(type.type.name);
    accList.push(type.accuracy);
  }
  return [typeList, accList];
};
/* ------------------------------------------------------FETCH A LA URL DE LOS ATAQUES */
const getType = async (url: string): Promise<any> => {
  const data: Response = await fetch(url);
  const json: any = await data.json();
  return json;
};
/* -----------------------------------------------ESTO LA LISTA DE LA DESCRIPCIÓN DE LA HABILIDAD SI ESTÁ EN INGLÉS */
export const getHabilities = async (list: string[]): Promise<string[]> => {
  const habilityList: string[] = [];
  for (const url of list) {
    const hability = await getHability(url);
    for (const entry of hability.effect_entries) {
      if (entry.language.name === "en") {
        habilityList.push(entry.effect);
      }
    }
  }
  return habilityList;
};
/* ---------------------------------------------------------FETCH A LA URL DE LA HABILIDAD */
const getHability = async (url: string): Promise<any> => {
  const data: Response = await fetch(url);
  const json: any = await data.json();
  return json;
};
/* ------------------------------------------------------------------------------------------------ */
export const character = async (n:number) => {
  const char = await getCharacter(n); /* pokemon completo */
  const firstThreeMoves = char.moves.splice(0, 3);
  const urlList: string[] = []; /* ------------------LISTA DE URLS DE 3 PRIMEROS MOVIENTOS */
  const moveList: string[] = [];
  for (const move of firstThreeMoves) {
    urlList.push(move.move.url);
    moveList.push(move.move.name);  /* ----------------lista de nombres 3 primeros movimientos */
  }
  const arrayTypeAcc: string[][] = await getMoveTypes(urlList);
  /*---------------------------------------------- array con tipo de ataque y array con accuracy */
  const urlHList: string[] = [];
  const abilityNames: string[] =
    []; /* -------------------------------------------lista de nombres de habilidades */
  for (const hab of char.abilities) {
    urlHList.push(hab.ability.url);
    abilityNames.push(hab.ability.name);
  }
  const arrayDesc: string[] = await getHabilities(urlHList);
  /*------------------------------------------------------ array con descripcion de habilidades */
  const stats: Stats[] = [] as Stats[];
  for (const stat of char.stats) {
    /*--------------------------------------------------------------------- estadísticas */
    const estats: Stats = {
      name: stat.stat.name,
      base: stat.base_stat,
    };
    stats.push(estats);
  }
  const typeList: string[] = []; /* -----------------------------------------------lista de tipos */
  for (const type of char.types) {
    typeList.push(type.type.name);
  }
  const moves: Moves[] = [];
  let index: number = -1;
  for (const move of moveList) {
    index++;
    const moved: Moves = {
      name: move,
      type: arrayTypeAcc[0][index],
      accuracy: arrayTypeAcc[1][index],
    };
    moves.push(moved); /* ------------------------------------------------------Ataques */
  }
  index = -1;
  const abilitys: Hability[] = [];
  for (const ability of abilityNames) {
    index++;
    const hab: Hability = {
      name: ability,
      description: arrayDesc[index],
    };
    abilitys.push(hab) /* --------------------------------------------------------Habilidades */
  }
  const pokemon: Pokemon = {
    name: char.name,
    id: char.id,
    height: char.height,
    weight: char.weight,
    stats: stats,
    type: typeList,
    habilities: abilitys,
    moves: moves,
    images: {
      front: char.sprites.front_default,
      back: char.sprites.back_default,
      main: char.sprites.other.home.front_default,
      shiny: char.sprites.other.home.front_default,
    },
  };
  return pokemon
};
