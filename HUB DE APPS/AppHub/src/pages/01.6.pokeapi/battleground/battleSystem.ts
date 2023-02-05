import { globalRandomNumber } from "../../../utils/randomNumber";
/* import { Moves } from "../data"; */

export const battleSystem = (
  attack: number,
  acc: number,
 /*  speed: number,
  deffense: number, */
  attackType: string,
 /*  type1: string,
  type2: string, */
  type1OP: string,
  type2OP: string,
 /*  attackOP: number, */
  speedOP: number,
  deffenseOP: number,
  /* attacksListOP:Moves[] */
) => {
    /* let hp1:number=parseInt(localStorage.getItem('HP1') as string) */
    let hp2:number=parseInt(localStorage.getItem('HP2') as string)
    /* let score:number=parseInt(localStorage.getItem('scorePoke') as string) */
    let baseAttack:number=10;
   /*  let opBaseAttack:number=5; */
    /* ----------------------------------------------------------------------------------------declaración */
    if (localStorage.getItem('PKDif')=='Hard'){baseAttack=5;/* opBaseAttack=8 */}
    console.log('base',baseAttack)
    /* -----------------------------------------------------------------------------------------transformación de tu base attack */
    baseAttack=baseAttack+attack/10
    console.log('ataque despues de tu ataque y antes de variables',baseAttack)
    const fail:number=globalRandomNumber(100)
    if (fail>acc){baseAttack=baseAttack*0;console.log('ataque fallido')}
    
    const critic:number=globalRandomNumber(100)
    if (critic<8){baseAttack=baseAttack*2;console.log('ataque crítico')}
    
    const evade:number=globalRandomNumber(500)
    if (evade<speedOP){baseAttack=baseAttack*0;console.log('ataque esquivado')}
    console.log('ataque antes de tipos',baseAttack)
    /* ---------------------------------------------------------------------------------------comparación de tipos de tu ataque */
    const result:number=compareTypes(attackType, type1OP, type2OP);
    if (result==1){baseAttack=baseAttack*1.5;console.log('efectivo')}
    if (result==2){baseAttack=baseAttack*0;console.log('nulo')}
    /* ----------------------------------------------------------------------------------------defensa oponente */
    console.log('ataque antes de defensa',baseAttack)
    if (baseAttack!=0) { 
        baseAttack=baseAttack-deffenseOP/10;
        if (baseAttack<5){baseAttack=5}
    }
    console.log('ataque final',baseAttack)
    hp2=hp2-Math.round(baseAttack)
    console.log(hp2)

    localStorage.setItem('HP2',hp2.toString())
};

const bug: string[] = ["grass", "psychic"];
const dragon: string[] = ["dragon","none"];
const electric: string[] = ["water", "flying"];
const fairy: string[] = ["dragon", "fighting"];
const fighting: string[] = ["normal","none"];
const fire: string[] = ["steel", "bug", "ice", "grass"];
const flying: string[] = ["bug", "fighting", "grass"];
const ghost: string[] = ["ghost", "flying"];
const grass: string[] = ["water", "rock", "ground"];
const ground: string[] = ["steel", "electric", "rock", "poison", "fire"];
const ice: string[] = ["grass", "dragon", "ice", "flying"];
const poison: string[] = ["fairy", "grass"];
const psychic: string[] = ["poison", "fighting"];
const rock: string[] = ["bug", "fire", "flying", "ice"];
const steel: string[] = ["fairy", "ice", "rock"];
const water: string[] = ["fire", "ground", "rock"];

const inmufairy: string[] = ["dragon","none"];
const inmufighting: string[] = ["ghost","none"];
const inmuflying: string[] = ["ground","none"];
const inmughost: string[] = ["normal", "fighting"];
const inmuground: string[] = ["electric","none"];
const inmunormal: string[] = ["ghost","none"];
const inmusteel: string[] = ["poison","none"];
const compareTypes = (
  attackType: string,
  type1: string,
  type2: string
): number => {
  let eficaz: number = 0;
  let inmune: number = 0;
  eficaz=eficaz*0
  inmune=inmune*0
  let result: number = 0;
  if (attackType === "bug") {
    for (const type of bug) {
      if (type1 == type || type2 == type) {
        eficaz = 1;
      }
    }
  }
  if (attackType === "dragon") {
    for (const type of dragon) {
      if (type1 == type || type2 == type) {
        eficaz = 1;
      }
    }
  }
  if (attackType === "electric") {
    for (const type of electric) {
      if (type1 == type || type2 == type) {
        eficaz = 1;
      }
    }
  }
  if (attackType === "fairy") {
    for (const type of fairy) {
      if (type1 == type || type2 == type) {
        eficaz = 1;
      }
    }
    for (const type of inmufairy) {
      if (type1 == type || type2 == type) {
        inmune = 1;
      }
    }
  }
  if (attackType === "fighting") {
    for (const type of fighting) {
      if (type1 == type || type2 == type) {
        eficaz = 1;
      }
    }
    for (const type of inmufighting) {
      if (type1 == type || type2 == type) {
        inmune = 1;
      }
    }
  }
  if (attackType === "fire") {
    for (const type of fire) {
      if (type1 == type || type2 == type) {
        eficaz = 1;
      }
    }
  }
  if (attackType === "flying") {
    for (const type of flying) {
      if (type1 == type || type2 == type) {
        eficaz = 1;
      }
    }
    for (const type of inmuflying) {
      if (type1 == type || type2 == type) {
        inmune = 1;
      }
    }
  }
  if (attackType === "ghost") {
    for (const type of ghost) {
      if (type1 == type || type2 == type) {
        eficaz = 1;
      }
    }
    for (const type of inmughost) {
      if (type1 == type || type2 == type) {
        inmune = 1;
      }
    }
  }
  if (attackType === "grass") {
    for (const type of grass) {
      if (type1 == type || type2 == type) {
        eficaz = 1;
      }
    }
  }
  if (attackType === "ground") {
    for (const type of ground) {
      if (type1 == type || type2 == type) {
        eficaz = 1;
      }
    }
    for (const type of inmuground) {
      if (type1 == type || type2 == type) {
        inmune = 1;
      }
    }
  }
  if (attackType === "ice") {
    for (const type of ice) {
      if (type1 == type || type2 == type) {
        eficaz = 1;
      }
    }
  }
  if (attackType === "normal") {
    for (const type of inmunormal) {
      if (type1 == type || type2 == type) {
        inmune = 1;
      }
    }
  }
  if (attackType === "poison") {
    for (const type of poison) {
      if (type1 == type || type2 == type) {
        eficaz = 1;
      }
    }
  }
  if (attackType === "psychic") {
    for (const type of psychic) {
      if (type1 == type || type2 == type) {
        eficaz = 1;
      }
    }
  }
  if (attackType === "rock") {
    for (const type of rock) {
      if (type1 == type || type2 == type) {
        eficaz = 1;
      }
    }
  }
  if (attackType === "steel") {
    for (const type of steel) {
      if (type1 == type || type2 == type) {
        eficaz = 1;
      }
    }
    for (const type of inmusteel) {
      if (type1 == type || type2 == type) {
        inmune = 1;
      }
    }
  }
  if (attackType === "water") {
    for (const type of water) {
      if (type1 == type || type2 == type) {
        eficaz = 1;
      }
    }
  }
  if ((eficaz == 1)) {
    result = 1;
  }
   if ((inmune == 1)) {
    result = 2;
  } 
  return result;
};
