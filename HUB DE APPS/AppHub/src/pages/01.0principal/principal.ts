import { gameFigure } from "../../components/gameFigure";
import { imgButton } from "../../components/imgButton";
import { switchButton } from "../../components/switchTheme";
import "./principal.css";
import "../../styles/switch.css";
import { switchPrincipal } from "../../components/switchPrincipal";
import { pokeapi } from "../01.6.pokeapi/pokeapi";
import { main } from "../00.main/00main";
import { switchColor } from "../../utils/switch";

export const principal = (): void => {
  const body = document.querySelector<HTMLBodyElement>(
    "body"
  ) as HTMLBodyElement;
  body.setAttribute("id", "principalB");
  const nav: HTMLElement = document.createElement("nav");
  nav.setAttribute("id", "principalNav");
  const section: HTMLElement = document.createElement("section");
  section.setAttribute("id", "principalSection");
  const logOut: HTMLButtonElement = imgButton(
    "https://res.cloudinary.com/di0zpa5yw/image/upload/v1675264883/gamesHub/salida_bspcsc.png",
    "logOutButton"
  );
  const changeColour: HTMLButtonElement = switchButton(
    "principalSwitchTheme",
    "https://res.cloudinary.com/di0zpa5yw/image/upload/v1675189215/gamesHub/paint-palette_hgwh5c.png",
    1
  );
  logOut.addEventListener('click',()=>{
    if (window.confirm("¿Seguro que quieres salir? Es posible que los cambios no se guarden")) {main()}
  })
  const n: string = localStorage.getItem("colour") as string;
  body.setAttribute('class',`principalB${n}`)
  nav.setAttribute('class',`principalNav${n}`)
  section.setAttribute('class',`principalSection${n}`)
  changeColour.addEventListener("click", () => {
    switchPrincipal();
  });
  const h1: HTMLHeadingElement = document.createElement("h1");
  const user: string = localStorage.getItem("user") as string;
  h1.innerHTML = `Juguemos a algo ${user}`;
  nav.appendChild(logOut);
  nav.appendChild(h1);
  nav.appendChild(changeColour);
  const pokemon: HTMLElement = gameFigure(
    "https://res.cloudinary.com/di0zpa5yw/image/upload/v1675262466/gamesHub/pokebola_otj1s7.png",
    "Pokemon Battle",pokeapi,'PK'
  );
  section.appendChild(pokemon);
  body.appendChild(nav);
  body.appendChild(section);
  const num:number=parseInt(localStorage.getItem('colour') as string)
  localStorage.setItem("colour", n.toString());
    switchColor(num,'#principalB');
    switchColor(num,'#principalNav');
    switchColor(num,'#principalSection');
};
