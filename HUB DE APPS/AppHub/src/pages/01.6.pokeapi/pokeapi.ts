import { getPokemons, Pokemon } from "./data";
import "./pokeapi.css";
export const pokeapi = async ():Promise<void> => {
  const body = document.querySelector<HTMLBodyElement>(
    "body"
  ) as HTMLBodyElement;
  const nav: HTMLElement = document.createElement("nav");

  const divR:HTMLDivElement = document.createElement('div')
  const divL:HTMLDivElement = document.createElement('div')
  const sectionR:HTMLElement = document.createElement('section')
  const sectionL:HTMLElement = document.createElement('section')
  const navR:HTMLElement = document.createElement('nav')
  const navL:HTMLElement = document.createElement('nav')
  const divInsideR:HTMLDivElement = document.createElement('div')
  const divInsideL:HTMLDivElement = document.createElement('div')
  
  const footer:HTMLElement = document.createElement('footer')
  const battleAnchor:HTMLAnchorElement = document.createElement('a')
  
  const h1: HTMLHeadingElement = document.createElement("h1");
  h1.innerHTML = "pokeapi";
  nav.appendChild(h1);
  body.appendChild(nav);
  const location: string = window.location.href.split("/").reverse()[0];
  if (location === "Pokemon") {
    const pokemons:Pokemon[] = await getPokemons();
    console.log(pokemons)}
  


};
