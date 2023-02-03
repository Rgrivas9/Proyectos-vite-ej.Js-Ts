//import { Pokemon, pokemonList } from "./data";
//import { typeSelect } from "../../components/typeSelect";
import { figurePokemon } from "../../components/figurePokemon";
import { pokemonList } from "./data";
import "./pokeapi.css";
export const pokeapi = () => {
  const body = document.querySelector<HTMLBodyElement>(
    "body"
  ) as HTMLBodyElement;
  body.setAttribute('class','Pokemon')
  const nav: HTMLElement = document.createElement("nav");
  const navDiv1: HTMLDivElement = document.createElement("div");
  const navDiv1h3: HTMLHeadingElement = document.createElement("h3");
  navDiv1h3.innerHTML = "Difficulty";
  const difficultyBtn: HTMLButtonElement = document.createElement("button");
  difficultyBtn.innerHTML = "Easy";
  const navH2: HTMLHeadingElement = document.createElement("h2");
  navH2.innerHTML = "RECORD: 0000";
  const navDiv2: HTMLDivElement = document.createElement("div");
  const htpBtn: HTMLButtonElement = document.createElement("button");
  htpBtn.innerHTML = "How2Play";
  const returnBtn: HTMLButtonElement = document.createElement("button");
  const exitImg: HTMLImageElement = document.createElement("img");
  exitImg.setAttribute(
    "src",
    "https://res.cloudinary.com/di0zpa5yw/image/upload/v1675264883/gamesHub/salida_bspcsc.png"
  );
  returnBtn.appendChild(exitImg);
  navDiv1.appendChild(navDiv1h3);
  navDiv1.appendChild(difficultyBtn);
  navDiv2.appendChild(htpBtn);
  navDiv2.appendChild(returnBtn);
  nav.appendChild(navDiv1);
  nav.appendChild(navH2);
  nav.appendChild(navDiv2);

  const div: HTMLDivElement = document.createElement("div");
  const divDiv1: HTMLDivElement = document.createElement("div");
  const divDiv2: HTMLDivElement = document.createElement("div");
  const divDiv3: HTMLDivElement = document.createElement("div");
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
  const nav2div0: HTMLDivElement = document.createElement("div");
  const nav2div0h4: HTMLHeadingElement = document.createElement("h4");
  nav2div0h4.innerHTML = "Name";
  const nav2div0Input: HTMLInputElement = document.createElement("input");
  const nav2div1: HTMLDivElement = document.createElement("div");
  const nav2div1h4: HTMLHeadingElement = document.createElement("h4");
  nav2div1h4.innerHTML = "Type";
  //const nav2div1select: HTMLSelectElement = typeSelect()
  const nav2div2: HTMLDivElement = document.createElement("div");
  const nav2div2h4: HTMLHeadingElement = document.createElement("h4");
  nav2div2h4.innerHTML = "Sort";
  const nav2div2select: HTMLSelectElement = document.createElement("select");
  const sortId: HTMLOptionElement = document.createElement("option");
  sortId.innerHTML = "Id";
  const sortName: HTMLOptionElement = document.createElement("option");
  sortName.innerHTML = "Name";
  nav2div0.appendChild(nav2div0h4);
  nav2div0.appendChild(nav2div0Input);
  nav2div1.appendChild(nav2div1h4);
  //nav2div1.appendChild(nav2div1select);
  nav2div2.appendChild(nav2div2h4);
  nav2div2select.appendChild(sortId);
  nav2div2select.appendChild(sortName);
  nav2div2.appendChild(nav2div2select);
  nav2.appendChild(nav2div0);
  nav2.appendChild(nav2div1);
  nav2.appendChild(nav2div2);

  const section: HTMLElement = document.createElement("section");
  section.setAttribute('class','pokeSection')
  for (const pokemon of pokemonList) {
    const fig: HTMLElement = figurePokemon(pokemon);
    section.appendChild(fig);
  }
  body.appendChild(nav);
  body.appendChild(div);
  body.appendChild(nav2);
  body.appendChild(section);
};
