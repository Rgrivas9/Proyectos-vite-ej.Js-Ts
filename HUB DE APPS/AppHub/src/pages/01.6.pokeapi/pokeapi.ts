//import { Pokemon, pokemonList } from "./data";
import { typeSelect } from "../../components/typeSelect";
import { figurePokemon } from "../../components/figurePokemon";
import { principal } from "../01.0principal/principal";
import { Pokemon, pokemonList } from "./data";
import "./pokeapi.css";
import "./gradientesPK.css";
import {
  filterPokemonsName,
  filterPokemonsType,
} from "../../utils/filterPokemons";
import { sortPokemons } from "../../utils/sortPokemons";
export const pokeapi = () => {
  const body = document.querySelector<HTMLBodyElement>(
    "body"
  ) as HTMLBodyElement;
  body.removeAttribute("id");
  body.setAttribute("class", "Pokemon");
  const nav: HTMLElement = document.createElement("nav");
  nav.setAttribute("class", "nav1Poke");
  const navDiv1: HTMLDivElement = document.createElement("div");
  const navDiv1h3: HTMLHeadingElement = document.createElement("h3");
  navDiv1h3.innerHTML = "Difficulty";
  const difficultyBtn: HTMLButtonElement = document.createElement("button");
  difficultyBtn.innerHTML = "Easy";
  const navH2: HTMLHeadingElement = document.createElement("h2");
  navH2.innerHTML = "RECORD: 0000";
  const navDiv2: HTMLDivElement = document.createElement("div");
  navDiv2.setAttribute("class", "navDiv2PK");
  const htpBtn: HTMLButtonElement = document.createElement("button");
  htpBtn.innerHTML = "How2Play";
  htpBtn.setAttribute("class", "htpPK");
  const returnBtn: HTMLButtonElement = document.createElement("button");
  returnBtn.setAttribute("class", "exitPK");
  const exitImg: HTMLImageElement = document.createElement("img");
  exitImg.setAttribute(
    "src",
    "https://res.cloudinary.com/di0zpa5yw/image/upload/v1675264883/gamesHub/salida_bspcsc.png"
  );
  exitImg.addEventListener("click", () => {
    body.removeAttribute("class");
    body.setAttribute("id", "principalB");
    body.innerHTML = "";
    principal();
  });
  returnBtn.appendChild(exitImg);
  navDiv1.appendChild(navDiv1h3);
  navDiv1.appendChild(difficultyBtn);
  navDiv2.appendChild(htpBtn);
  navDiv2.appendChild(returnBtn);
  nav.appendChild(navDiv1);
  nav.appendChild(navH2);
  nav.appendChild(navDiv2);

  const div: HTMLDivElement = document.createElement("div");
  div.setAttribute("class", "divHeader");
  const divDiv1: HTMLDivElement = document.createElement("div");
  divDiv1.setAttribute("class", "youPokemon");
  const divDiv2: HTMLDivElement = document.createElement("div");
  divDiv2.setAttribute("class", "vs");
  const divDiv3: HTMLDivElement = document.createElement("div");
  divDiv3.setAttribute("class", "opPokemon");
  const divDiv1H3: HTMLHeadingElement = document.createElement("h3");
  divDiv1H3.innerHTML = "You";
  const divDiv1Div: HTMLDivElement = document.createElement("div");
  const emptyFig: HTMLElement = document.createElement("figure");
  const emptyFig2: HTMLElement =
    document.createElement("figure"); /* ---------------------emptyfig */
  const divDiv2Btn: HTMLButtonElement = document.createElement("button");
  divDiv2Btn.innerHTML = "VS";
  const divDiv3H3: HTMLHeadingElement = document.createElement("h3");
  divDiv3H3.innerHTML = "Opponent";
  const divDiv3Div: HTMLDivElement = document.createElement("div");
  divDiv1.appendChild(divDiv1H3);
  divDiv1.appendChild(divDiv1Div);
  divDiv1Div.appendChild(emptyFig);
  divDiv2.appendChild(divDiv2Btn);
  divDiv3.appendChild(divDiv3H3);
  divDiv3Div.appendChild(emptyFig2);
  divDiv3.appendChild(divDiv3Div);
  div.appendChild(divDiv1);
  div.appendChild(divDiv2);
  div.appendChild(divDiv3);

  const nav2: HTMLElement = document.createElement("nav");
  nav2.setAttribute("class", "nav2Poke");
  const nav2div0: HTMLDivElement = document.createElement("div");
  const nav2div0h4: HTMLHeadingElement = document.createElement("h4");
  nav2div0h4.innerHTML = "Name";
  const nav2div0Input: HTMLInputElement = document.createElement("input");
  const nav2div1: HTMLDivElement = document.createElement("div");
  const nav2div1h4: HTMLHeadingElement = document.createElement("h4");
  nav2div1h4.innerHTML = "Type";
  const nav2div1select: HTMLSelectElement = typeSelect();
  nav2div1select.setAttribute("class", "searchPKtype");
  const nav2div2: HTMLDivElement = document.createElement("div");
  const nav2div2h4: HTMLHeadingElement = document.createElement("h4");
  nav2div2h4.innerHTML = "Sort";
  const nav2div2select: HTMLSelectElement = document.createElement("select");
  nav2div2select.setAttribute("class", "searchPKid");
  const sortId: HTMLOptionElement = document.createElement("option");
  sortId.innerHTML = "Id";
  const sortName: HTMLOptionElement = document.createElement("option");
  sortName.innerHTML = "Name";
  nav2div0.appendChild(nav2div0h4);
  nav2div0.appendChild(nav2div0Input);
  nav2div1.appendChild(nav2div1h4);
  nav2div1.appendChild(nav2div1select);
  nav2div2.appendChild(nav2div2h4);
  nav2div2select.appendChild(sortId);
  nav2div2select.appendChild(sortName);
  nav2div2.appendChild(nav2div2select);
  nav2.appendChild(nav2div0);
  nav2.appendChild(nav2div1);
  nav2.appendChild(nav2div2);

  const section: HTMLElement = document.createElement("section");
  section.setAttribute("class", "pokeSection");
  for (const pokemon of pokemonList) {
    const fig: HTMLElement = figurePokemon(pokemon);
    section.appendChild(fig);
  }
  body.appendChild(nav);
  body.appendChild(div);
  body.appendChild(nav2);
  body.appendChild(section);
  localStorage.setItem('namefilter',"")
  localStorage.setItem('typefilter','All')
  localStorage.setItem('sortPokemon','Id')
  nav2div0Input.addEventListener("input", () => {
    localStorage.setItem('namefilter',nav2div0Input.value)
    section.innerHTML = "";
    localStorage.getItem('typefilter') ? nav2div1select.value=localStorage.getItem('typefilter') as string : nav2div1select.value='All'
    localStorage.getItem('sortPokemon') ? nav2div2select.value=localStorage.getItem('sortPokemon') as string : nav2div2select.value='Id'
    const typedP:Pokemon[]=filterPokemonsType(pokemonList,nav2div1select.value)
    const filteredP:Pokemon[]=filterPokemonsName(typedP,nav2div0Input.value)
    const sortedP:Pokemon[]=sortPokemons(filteredP,nav2div2select.value)
    for (const pokemon of sortedP) {
      const fig: HTMLElement = figurePokemon(pokemon);
      section.appendChild(fig); 

    }
  });
  nav2div1select.addEventListener("change", () => {
    localStorage.setItem('typefilter',nav2div1select.value)
    section.innerHTML = "";
    localStorage.getItem('namefilter') ? nav2div0Input.value=localStorage.getItem('namefilter') as string : nav2div0Input.value = "";
    localStorage.getItem('sortPokemon') ? nav2div2select.value=localStorage.getItem('sortPokemon') as string : nav2div2select.value='Id'
    const typedP:Pokemon[]=filterPokemonsType(pokemonList,nav2div1select.value)
    const filteredP:Pokemon[]=filterPokemonsName(typedP,nav2div0Input.value)
    const sortedP:Pokemon[]=sortPokemons(filteredP,nav2div2select.value)
    for (const pokemon of sortedP) {
      const fig: HTMLElement = figurePokemon(pokemon);
      section.appendChild(fig); 

    }
  });
  nav2div2select.addEventListener('change',()=>{
    localStorage.setItem('sortPokemon',nav2div2select.value)
    section.innerHTML = "";
    localStorage.getItem('typefilter') ? nav2div1select.value=localStorage.getItem('typefilter') as string : nav2div1select.value='All'
    localStorage.getItem('namefilter') ? nav2div0Input.value=localStorage.getItem('namefilter') as string : nav2div0Input.value = "";
    const typedP:Pokemon[]=filterPokemonsType(pokemonList,nav2div1select.value)
    const filteredP:Pokemon[]=filterPokemonsName(typedP,nav2div0Input.value)
    const sortedP:Pokemon[]=sortPokemons(filteredP,nav2div2select.value)
    for (const pokemon of sortedP) {
      const fig: HTMLElement = figurePokemon(pokemon);
      section.appendChild(fig); 

    }
  })
};
