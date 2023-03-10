import { globalRandomNumber } from "../../../utils/randomNumber";
import { Moves } from "../data";

export const battleSystem = (
  attack: number,
  acc: number,
  speed: number,
  deffense: number,
  attackType: string,
  type1: string,
  type2: string,
  type1OP: string,
  type2OP: string,
  attackOP: number,
  speedOP: number,
  deffenseOP: number,
  attacksListOP: Moves[],
  attackname:string
) => {
  let hp1: number = parseInt(localStorage.getItem("HP1") as string);
  let hp2: number = parseInt(localStorage.getItem("HP2") as string);
  /* let score: number = parseInt(localStorage.getItem("scorePoke") as string); */
  let baseAttack: number = 12;
  let opBaseAttack: number = 5;
  let youList:string[]=['normal']
  let isCritical:string='no'
  /* ----------------------------------------------------------------------------------------declaración */
  if (localStorage.getItem("PKDif") == "Hard") {
    baseAttack = 6; opBaseAttack=10
  }
  if (acc!=null && acc<100){baseAttack=baseAttack+2}
  if (acc!=null && acc<90){baseAttack=baseAttack+2}
  if (acc!=null && acc<80){baseAttack=baseAttack+2}
  /* -----------------------------------------------------------------------------------------transformación de tu base attack */
  baseAttack = baseAttack + attack / 10;
  if (acc == null) {
    youList.push('null')
    baseAttack = baseAttack * 0;
  }
  const fail: number = globalRandomNumber(105);
  if (fail > acc && acc != null) {
    youList.push('fail')
    baseAttack = baseAttack * 0;
  }

  const critic: number = globalRandomNumber(100);
  if (critic < 8) {
    isCritical='yes'
    baseAttack = baseAttack * 2.75;
  }

  const evade: number = globalRandomNumber(500);
  if (evade < speedOP) {
    youList.push('evade')
    baseAttack = baseAttack * 0;
  }
  /* ---------------------------------------------------------------------------------------comparación de tipos de tu ataque */
  const result: number = compareTypes(attackType, type1OP, type2OP);
  if (result == 1) {
    youList.push('effect')
    baseAttack = baseAttack * 2;
  }
  if (result == 2) {
    youList.push('noeffect')
    baseAttack = baseAttack * 0;
  }
  /* ----------------------------------------------------------------------------------------defensa oponente */
  if (baseAttack != 0) {
    baseAttack = baseAttack - deffenseOP / 12;
    if (baseAttack < 5) {
      baseAttack = 5;
    }
    baseAttack=baseAttack+globalRandomNumber(5)
  }
  
  hp2 = hp2 - Math.round(baseAttack);
  const maindivbattle=document.querySelector<HTMLDivElement>('.mainDivBattle') as HTMLDivElement
  const youDiv:HTMLDivElement=document.createElement('div')
  maindivbattle.appendChild(youDiv)
  youDiv.innerHTML=`${localStorage.getItem('Poke1')} ha usado ${attackname}!`
  youDiv.setAttribute('class','resultBattle')
  setTimeout(() => {if (youList[youList.length-1]=='noeffect'){youDiv.innerHTML=`Pero ${localStorage.getItem('Poke2')} es inmune a ese tipo de ataque!`;youList=[]}
    if (youList[1]=='null'){youDiv.innerHTML=`Pero ${attackname} no tiene efecto en los enemigos!`;youList=[]}
  if (youList[1]=='fail'){youDiv.innerHTML=`Pero falló!`;youList=[]}
  if (youList[1]=='evade'){youDiv.innerHTML=`Pero ${localStorage.getItem('Poke2')} lo esquivó!`;youList=[]}
  if (youList[1]=='effect'){youDiv.innerHTML=`Es muy efectivo!`;youList=['critical']}
  
  if (youList[0]=='normal'){youDiv.innerHTML=`El ataque ha tenido éxito!`;youList=['critical']}}, 1200)
  setTimeout(() => {if (isCritical=='yes' && youList[0]=='critical'){youDiv.innerHTML=`Daño crítico!`}else {youDiv.innerHTML=''}}, 2400)
  setTimeout(() => {
    maindivbattle.removeChild(youDiv)
  }, 3600);
  if (hp2 <= 0) {
    hp2=0
  }
  localStorage.setItem("HP2", hp2.toString());
  if (hp2 > 0) {
    
    setTimeout(() => {
      let opList:string[]=['normal']
      let opisCritical:string='no'
      opBaseAttack = opBaseAttack + attackOP / 10;
      const opAttack: Moves =
        attacksListOP[globalRandomNumber(attacksListOP.length) - 1];
      if (opAttack.accuracy == null) {
        opList.push('null')
        opBaseAttack = opBaseAttack * 0;
      }
      const fail: number = globalRandomNumber(100);
      if (fail > opAttack.accuracy && opAttack.accuracy != null) {
        opList.push('fail')
        opBaseAttack = opBaseAttack * 0;
      }

      const critic: number = globalRandomNumber(100);
      if (critic < 8) {
        opisCritical='yes'
        opBaseAttack = opBaseAttack * 2.75;
      }

      const evade: number = globalRandomNumber(500);
      if (evade < speed) {
        opList.push('evade')
        opBaseAttack = opBaseAttack * 0;
      }
      /* ---------------------------------------------------------------------------tipos */
      const result: number = compareTypes(opAttack.type, type1, type2);
      if (result == 1) {
        opList.push('effect')
        opBaseAttack = opBaseAttack * 2;
      }
      if (result == 2) {
        opList.push('noeffect')
        opBaseAttack = opBaseAttack * 0;
      }
      /* --------------------------------------------------------------------defensa */
      if (opBaseAttack != 0) {
        opBaseAttack = opBaseAttack - deffense / 12;
        if (opBaseAttack < 5) {
          opBaseAttack = 5;
        }
        opBaseAttack=opBaseAttack+globalRandomNumber(5)
      }
      
      hp1 = hp1 - Math.round(opBaseAttack);
      if (hp1 <= 0) {
        hp1=0
      }
      
      localStorage.setItem("HP1", hp1.toString());
      const maindivbattle=document.querySelector<HTMLDivElement>('.mainDivBattle') as HTMLDivElement
      const youDiv:HTMLDivElement=document.createElement('div')
      maindivbattle.appendChild(youDiv)
      youDiv.innerHTML=`${localStorage.getItem('Poke2')} ha usado ${opAttack.name}!`
      youDiv.setAttribute('class','resultBattleop')
      setTimeout(() => {if (opList[opList.length-1]=='noeffect'){youDiv.innerHTML=`Pero ${localStorage.getItem('Poke1')} es inmune a ese tipo de ataque!`;opList=[]}
        if (opList[1]=='null'){youDiv.innerHTML=`Pero ${opAttack.name} no tiene efecto en los enemigos!`;opList=[]}
      if (opList[1]=='fail'){youDiv.innerHTML=`Pero falló!`;opList=[]}
      if (opList[1]=='evade'){youDiv.innerHTML=`Pero ${localStorage.getItem('Poke1')} lo esquivó!`;opList=[]}
      if (opList[1]=='effect'){youDiv.innerHTML=`Es muy efectivo!`;opList=['critical']}
      
      if (opList[0]=='normal'){youDiv.innerHTML=`El ataque ha tenido éxito!`;opList=['critical']}}, 1200)
      setTimeout(() => {if (opisCritical=='yes' && opList[0]=='critical'){youDiv.innerHTML=`Daño crítico!`}else {youDiv.innerHTML=''}}, 2400)
      setTimeout(() => {
        maindivbattle.removeChild(youDiv);
        
      }, 3600);
    }, 4000);
  }
};

const bug: string[] = ["grass", "psychic","dark"];
const dragon: string[] = ["dragon", "none"];
const electric: string[] = ["water", "flying"];
const fairy: string[] = ["dragon", "fighting","dark"];
const fighting: string[] = ["normal", "ice","dark","rock","steel"];
const fire: string[] = ["steel", "bug", "ice", "grass"];
const flying: string[] = ["bug", "fighting", "grass"];
const ghost: string[] = ["ghost", "flying","psychic"];
const grass: string[] = ["water", "rock", "ground"];
const ground: string[] = ["steel", "electric", "rock", "poison", "fire"];
const ice: string[] = ["grass", "dragon", "ice", "flying"];
const poison: string[] = ["fairy", "grass"];
const psychic: string[] = ["poison", "fighting"];
const rock: string[] = ["bug", "fire", "flying", "ice"];
const steel: string[] = ["fairy", "ice", "rock"];
const water: string[] = ["fire", "ground", "rock"];
const dark: string[] = ["ghost", "psychic"];

const inmufairy: string[] = ["dragon", "none"];
const inmufighting: string[] = ["ghost", "none"];
const inmuflying: string[] = ["ground", "none"];
const inmughost: string[] = ["normal", "fighting"];
const inmuground: string[] = ["electric", "none"];
const inmunormal: string[] = ["ghost", "none"];
const inmusteel: string[] = ["poison", "none"];
const inmudark: string[] = ["psychic", "none"];
const compareTypes = (
  attackType: string,
  type1: string,
  type2: string
): number => {
  let eficaz: number = 0;
  let inmune: number = 0;
  eficaz = eficaz * 0;
  inmune = inmune * 0;
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
  if (attackType === "dark") {
    for (const type of dark) {
      if (type1 == type || type2 == type) {
        eficaz = 1;
      }
    }
    for (const type of inmudark) {
      if (type1 == type || type2 == type) {
        inmune = 1;
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
  if (eficaz == 1) {
    result = 1;
  }
  if (inmune == 1) {
    result = 2;
  }
  return result;
};
