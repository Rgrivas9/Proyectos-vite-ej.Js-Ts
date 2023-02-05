//import { filterPokemonsName } from "../../../utils/filterPokemons";
import { Pokemon, pokemonList } from "../data";
import "./battleground.css";
export const battleground = (): void => {
  localStorage.setItem("scorePoke", "0000");
  const body = document.querySelector<HTMLBodyElement>(
    "body"
  ) as HTMLBodyElement;
  body.setAttribute("class", "Battleground");
  const divHeader = document.querySelector<HTMLDivElement>(
    ".divHeader"
  ) as HTMLDivElement;
  const nav2 = document.querySelector<HTMLElement>(".nav2Poke") as HTMLElement;
  const pokeSection = document.querySelector<HTMLElement>(
    ".pokeSection"
  ) as HTMLElement;
  body.removeChild(divHeader);
  body.removeChild(nav2);
  body.removeChild(pokeSection);
  /* -------------------------------------------------------------------------LIMPIAR */
  const poke1:Pokemon=pokemonList.filter((pokemon)=>pokemon.name == localStorage.getItem('Poke1'))[0]
  const poke2:Pokemon=pokemonList.filter((pokemon)=>pokemon.name == localStorage.getItem('Poke2'))[0]
  /* -------------------------------------------------------------------------------pokemons */
  const mainDiv: HTMLDivElement = document.createElement("div");
  mainDiv.setAttribute("class", "mainDivBattle");

  const mainDivOp: HTMLDivElement = document.createElement("div");
  mainDivOp.setAttribute("class", "mainDivOp");

  const mainDivOpL: HTMLDivElement = document.createElement("div");
  mainDivOpL.setAttribute("class", "mainDivOpL");

  const opLh3: HTMLHeadingElement = document.createElement("h3");
  opLh3.innerHTML = localStorage.getItem("Poke2") as string;
  const opLdiv: HTMLDivElement = document.createElement("div");
  opLdiv.setAttribute("class", "opLdiv");
  const oph4: HTMLHeadingElement = document.createElement("h4");
  oph4.innerHTML =`HP: ${poke2.stats[0].base}`; /* ---------------------------------------------------------------------------------HP OP */
  const opLdivContain: HTMLDivElement = document.createElement("div");
  opLdivContain.setAttribute("class", "opLdivContain");
  const opLdivBar: HTMLDivElement = document.createElement("div");
  opLdivBar.setAttribute(
    "class",
    "opLdivBar"
  ); /* -----------------------------------------------------------------barra op */
  opLdivBar.setAttribute("style", "width: 100%");

  opLdivContain.appendChild(opLdivBar);
  opLdiv.appendChild(oph4);
  opLdiv.appendChild(opLdivContain);
  mainDivOpL.appendChild(opLh3);
  mainDivOpL.appendChild(opLdiv);

  const mainDivOpR: HTMLDivElement = document.createElement("div");
  mainDivOpR.setAttribute("class", "mainDivOpR");

  const score: HTMLHeadingElement = document.createElement("h2");
  score.innerHTML = `SCORE: ${localStorage.getItem("scorePoke")}`;
  const img: HTMLImageElement = document.createElement("img");
  img.setAttribute('src',poke2.images.front)

  mainDivOpR.appendChild(score);
  mainDivOpR.appendChild(img);

  mainDivOp.appendChild(mainDivOpL);
  mainDivOp.appendChild(mainDivOpR);

  const mainDivYou: HTMLDivElement = document.createElement("div");
  mainDivYou.setAttribute("class", "mainDivYou");

  const mainDivYouL: HTMLDivElement = document.createElement("div");
  mainDivYouL.setAttribute("class", "mainDivYouL");

  const imgyou: HTMLImageElement = document.createElement("img");
  imgyou.setAttribute('src',poke1.images.back)

  mainDivYouL.appendChild(imgyou);

  const mainDivYouR: HTMLDivElement = document.createElement("div");
  mainDivYouR.setAttribute("class", "mainDivYouR");

  const youRh3: HTMLHeadingElement = document.createElement("h3");
  youRh3.innerHTML = localStorage.getItem("Poke1") as string;
  const youRdiv: HTMLDivElement = document.createElement("div");
  youRdiv.setAttribute("class", "youRdiv");
  const youh4: HTMLHeadingElement = document.createElement("h4");
  youh4.innerHTML =
    `HP: ${poke1.stats[0].base}`; /* ---------------------------------------------------------------------------------HP you */
  const youRdivContain: HTMLDivElement = document.createElement("div");
  youRdivContain.setAttribute("class", "youRdivContain");
  const youRdivBar: HTMLDivElement = document.createElement("div");
  youRdivBar.setAttribute(
    "class",
    "youRdivBar"
  ); /* -----------------------------------------------------------------barra you */
  youRdivBar.setAttribute("style", "width: 100%");

  youRdivContain.appendChild(youRdivBar);
  youRdiv.appendChild(youh4);
  youRdiv.appendChild(youRdivContain);
  mainDivYouR.appendChild(youRh3);
  mainDivYouR.appendChild(youRdiv);

  mainDivYou.appendChild(mainDivYouL);
  mainDivYou.appendChild(mainDivYouR);

  mainDiv.appendChild(mainDivOp);
  mainDiv.appendChild(mainDivYou);
  body.appendChild(mainDiv);

  const attackNav: HTMLElement = document.createElement("nav");
  attackNav.setAttribute("class", "attackNav");
  for (const attack of poke1.moves){
    const attackdiv:HTMLDivElement=document.createElement('div')
    const name:HTMLHeadingElement=document.createElement('h5')
    const ul:HTMLUListElement=document.createElement('ul')
    const type:HTMLLIElement=document.createElement('li')
    const acc:HTMLLIElement=document.createElement('li')
    name.innerHTML=attack.name
    type.innerHTML=attack.type
    acc.innerHTML=`Acc: ${attack.accuracy}`
    ul.appendChild(type)
    ul.appendChild(acc)
    attackdiv.appendChild(name)
    attackdiv.appendChild(ul)
    attackNav.appendChild(attackdiv)
  }
  body.appendChild(attackNav);
};
