import { clean } from "../../utils/cleanPage";
//import { linkPage } from "../../utils/linkPage"
import { switchButton } from "../../components/switchTheme";
import { mainButton } from "../../components/mainButton";
import { mainInput } from "../../components/mainInput";
import { mediaAnchor } from "../../components/mediaAnchor";
import "./main.css";
import { imgButton } from "../../components/imgButton";
import { switchColor } from "../../utils/switch";

export const main = (): void => {
  localStorage.setItem('main','true')
  const body = document.querySelector<HTMLBodyElement>(
    "body"
  ) as HTMLBodyElement;
  body.innerHTML=`<header></header><main></main><footer></footer>`
  body.removeAttribute('class')
  body.removeAttribute('id')
  const header = document.querySelector<HTMLElement>("header") as HTMLElement;
  const main = document.querySelector<HTMLElement>("main") as HTMLElement;
  const footer = document.querySelector<HTMLElement>("footer") as HTMLElement;
  const h1: HTMLHeadingElement = document.createElement("h1");
  const h3: HTMLHeadingElement = document.createElement("h3");
  const div: HTMLDivElement = document.createElement("div");
  const ul: HTMLUListElement = document.createElement("ul");
  const video: HTMLVideoElement = document.createElement("video");
  const src: HTMLSourceElement = document.createElement("source");
  const cover: HTMLDivElement = document.createElement("div");
  const h4: HTMLHeadingElement = document.createElement("h4");
  const logout: HTMLButtonElement = imgButton(
    "https://res.cloudinary.com/di0zpa5yw/image/upload/v1675277789/gamesHub/cerrar-sesion_npnjo3.png",
    "mainLogOut"
  );
  logout.setAttribute('id','logOutMainButton')
  const divLog: HTMLDivElement = document.createElement("div");
  const divNoLog: HTMLDivElement = document.createElement("div");
  divLog.setAttribute("class", "divLog");
  divNoLog.setAttribute("class", "divLog");
  const user: string = localStorage.getItem("user") as string;
  cover.setAttribute("class", "cover");
  body.appendChild(cover);
  src.setAttribute(
    "src",
    "https://res.cloudinary.com/di0zpa5yw/video/upload/v1675239845/gamesHub/Millennium_falcon_hyperdrive_effect_tukotn.mp4"
  );
  src.setAttribute("type", "video/mp4");
  video.setAttribute("autoplay", "false");
  video.setAttribute("muted", "true");
  video.setAttribute("id", "videoFalcon");
  video.setAttribute("class", "hidden");
  video.appendChild(src);
  video.pause()
  clean(header);
  clean(main);
  clean(footer);
  header.appendChild(
    switchButton(
      "mainSwitchTheme",
      "https://res.cloudinary.com/di0zpa5yw/image/upload/v1675189215/gamesHub/paint-palette_hgwh5c.png"
    )
  );
  h1.innerHTML = "Duel of the games";
  h3.innerHTML = "Introduce tu nombre";
  body.appendChild(video);
  div.appendChild(h1);
  div.appendChild(h3);
  divLog.appendChild(mainInput());
  div.appendChild(divLog);
  h4.innerHTML = `Bienvenido ${user}!`;
  divNoLog.appendChild(h4);
  divNoLog.appendChild(logout);
  div.appendChild(divNoLog);
  logout.addEventListener("click", () => {
    divNoLog.classList.add('mainNone')
    divLog.classList.remove('mainNone')
  });
  if (user === null) {
    divNoLog.classList.add('mainNone')
  }
  if (user !== null) {
    divLog.classList.add('mainNone')
  }
  div.appendChild(mainButton());
  main.appendChild(div);
  ul.appendChild(
    mediaAnchor(
      "https://res.cloudinary.com/di0zpa5yw/image/upload/v1675183434/gamesHub/github_cxjker.png",
      "https://github.com/Rgrivas9",
      "Github"
    )
  );
  ul.appendChild(
    mediaAnchor(
      "https://res.cloudinary.com/di0zpa5yw/image/upload/v1675183434/gamesHub/vercel_xqulbz.png",
      "https://vercel.com/rgrivas9",
      "Vercel",
      0
    )
  );
  footer.appendChild(ul);
  const n: string = localStorage.getItem("colour") as string;
  if (n!=='null'){
    const num:number=parseInt(n)
    switchColor(num,'body');
    switchColor(num,'header');
    switchColor(num,'main');
    switchColor(num,'input');
    switchColor(num,'#mainbutton');
    switchColor(num,'footer');
  }
};
