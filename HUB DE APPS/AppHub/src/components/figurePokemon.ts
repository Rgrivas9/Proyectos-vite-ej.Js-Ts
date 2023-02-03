import { Pokemon } from "../pages/01.6.pokeapi/data";

export const figurePokemon = (pokemon: Pokemon): HTMLElement => {
  const figure: HTMLElement = document.createElement("figure");
  pokemon.type.length == 2
    ? figure.setAttribute("class", pokemon.type.join(""))
    : figure.setAttribute("class", pokemon.type[0]);

  const section: HTMLElement = document.createElement("section");
  const id: HTMLHeadingElement = document.createElement("h3");
  id.innerHTML = `n:${pokemon.id}`;
  const name: HTMLHeadingElement = document.createElement("h2");
  name.innerHTML = pokemon.name;
  const typed: HTMLHeadingElement =
    document.createElement("h3"); /* for de tipos */

  pokemon.type.length == 1
    ? (typed.innerHTML = pokemon.type[0])
    : (typed.innerHTML = `${pokemon.type[0]}/${pokemon.type[1]}`);

  section.appendChild(id);
  section.appendChild(name);
  section.appendChild(typed);

  const div: HTMLElement = document.createElement("div");
  div.setAttribute(
    "class",
    "mainDivPK"
  ); /* ------------------------------------------------------------------------div principal */

  const divL: HTMLDivElement = document.createElement("div");
  divL.setAttribute(
    "class",
    "imgDivPK"
  ); /* ------------------------------------------------------------------------------div img */
  const img: HTMLImageElement = document.createElement("img");
  const imgShiny: HTMLImageElement = document.createElement("img");
  const divHW: HTMLDivElement = document.createElement("div");
  divHW.setAttribute(
    "class",
    "HWdiv"
  ); /* ----------------------------------------------------------------------------div HW */
  const heigth: HTMLDivElement = document.createElement("div");
  const weight: HTMLDivElement = document.createElement("div");
  imgShiny.setAttribute("class", "noShiny");
  img.setAttribute("src", pokemon.images.main);
  imgShiny.setAttribute("src", pokemon.images.shiny);
  heigth.innerHTML = `<h4>Height: ${pokemon.height * 10}cm</h4>`;
  weight.innerHTML = `<h4>Weight: ${pokemon.weight / 10}kg</h4>`;

  divL.appendChild(img);
  divL.appendChild(imgShiny);
  divHW.appendChild(heigth);
  divHW.appendChild(weight);
  divL.appendChild(divHW);

  div.appendChild(divL);

  const divR: HTMLDivElement = document.createElement("div");
  divR.setAttribute(
    "class",
    "statsDivPK"
  ); /* ----------------------------------------------------------------------stats div */
  const divStats: HTMLDivElement = document.createElement("div");
  divStats.setAttribute(
    "class",
    "ulstatsDiv"
  ); /* -------------------------------------------------------------------div ul stats */
  const ulStats: HTMLUListElement =
    document.createElement("ul"); /* for de stats */
  ulStats.setAttribute(
    "class",
    "statsUl"
  ); /* ------------------------------------------------------------------------ul stats */
  const h4stats: HTMLHeadingElement = document.createElement("h4");
  h4stats.innerHTML = "STATS";
  ulStats.appendChild(h4stats);
  for (const stat of pokemon.stats) {
    const li: HTMLLIElement = document.createElement("li");
    stat.name == "special-attack"
      ? (li.innerHTML = `s-attack: ${stat.base}`)
      : stat.name == "special-defense"
      ? (li.innerHTML = `s-defense: ${stat.base}`)
      : (li.innerHTML = `${stat.name}: ${stat.base}`);

    ulStats.appendChild(li);
  }
  divStats.appendChild(ulStats);
  const ulAttacks: HTMLUListElement =
    document.createElement("ul"); /* for de attacks */
  ulAttacks.setAttribute(
    "class",
    "movesUl"
  ); /* ---------------------------------------------------------------------------------ul attacks */
  const h4attacks: HTMLHeadingElement = document.createElement("h4");
  h4attacks.innerHTML = "ATTACKS";
  ulAttacks.appendChild(h4attacks);
  for (const at of pokemon.moves) {
    const li: HTMLLIElement = document.createElement("li");
    li.innerHTML = `${at.name}/type: ${at.type}`;
    ulAttacks.appendChild(li);
  }
  divStats.appendChild(ulAttacks);
  const habs: HTMLHeadingElement = document.createElement("h4");
  habs.innerHTML = "HABILITIES";
  const divHab: HTMLDivElement =
    document.createElement("div"); /* for de habilidades */
  divHab.setAttribute(
    "class",
    "habdivPK"
  ); /* -------------------------------------------------------------------------------------divHab */
  for (const ab of pokemon.habilities) {
    const div: HTMLDivElement = document.createElement("div");
    const h5: HTMLHeadElement = document.createElement("h5");
    const p: HTMLParagraphElement = document.createElement("p");
    h5.innerHTML = ab.name;
    p.innerHTML = ab.description;
    div.appendChild(h5);
    div.appendChild(p);
    divHab.appendChild(div);
  }
  divR.appendChild(divStats);
  divR.appendChild(habs);
  divR.appendChild(divHab);
  div.appendChild(divR);
  figure.appendChild(section);
  figure.appendChild(div);

  return figure;
};
