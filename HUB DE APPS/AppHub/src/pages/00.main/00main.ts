import { clean } from "../../utils/cleanPage";
//import { linkPage } from "../../utils/linkPage"
import { switchButton } from "../../components/switchTheme";
import { mainButton } from "../../components/mainButton";
import { mainInput } from "../../components/mainInput";
import { mediaAnchor } from "../../components/mediaAnchor";
import "./main.css";
import "./switch.css";

export const main = (): void => {
  const header = document.querySelector<HTMLElement>("header") as HTMLElement;
  const main = document.querySelector<HTMLElement>("main") as HTMLElement;
  const footer = document.querySelector<HTMLElement>("footer") as HTMLElement;
  const h1: HTMLHeadingElement = document.createElement("h1");
  const h3: HTMLHeadingElement = document.createElement("h3");
  const div: HTMLDivElement = document.createElement("div");
  const ul:HTMLUListElement=document.createElement('ul')
  clean(header);
  clean(main);
  clean(footer);
  header.appendChild(switchButton("mainSwitchTheme",'https://res.cloudinary.com/di0zpa5yw/image/upload/v1675189215/gamesHub/paint-palette_hgwh5c.png'));
  h1.innerHTML = "Duel of the games";
  h3.innerHTML = "Introduce tu nombre";
  div.appendChild(h1);
  div.appendChild(h3);
  div.appendChild(mainInput())
  div.appendChild(mainButton());
  main.appendChild(div);
  ul.appendChild(mediaAnchor('https://res.cloudinary.com/di0zpa5yw/image/upload/v1675183434/gamesHub/github_cxjker.png','https://github.com/Rgrivas9','Github'))
  ul.appendChild(mediaAnchor('https://res.cloudinary.com/di0zpa5yw/image/upload/v1675183434/gamesHub/vercel_xqulbz.png','https://vercel.com/rgrivas9','Vercel',0))
  footer.appendChild(ul)
};