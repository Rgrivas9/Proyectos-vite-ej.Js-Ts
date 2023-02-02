//import { principal } from "../pages/01.0principal/principal";

import { principal } from "../pages/01.0principal/principal";

export const eventMainButton = (): void => {
  const input = document.querySelector<HTMLInputElement>(
    "input"
  ) as HTMLInputElement;
  const MainBtn = document.querySelector<HTMLButtonElement>(
    "#mainbutton"
  ) as HTMLButtonElement;
  const logOut = document.querySelector<HTMLButtonElement>(
    "#logOutMainButton"
  ) as HTMLButtonElement;
  if (input.value !== "") {
    input.setAttribute("readonly", "true");
    MainBtn.setAttribute("disabled", "true");
    logOut.setAttribute("disabled", "true");
    const video = document.querySelector<HTMLVideoElement>(
      "#videoFalcon"
    ) as HTMLVideoElement;
    const main = document.querySelector<HTMLElement>("main") as HTMLElement;
    const header = document.querySelector<HTMLElement>("header") as HTMLElement;
    const footer = document.querySelector<HTMLElement>("footer") as HTMLElement;
    const btnSwitch = document.querySelector<HTMLButtonElement>(
      ".mainSwitchTheme"
    ) as HTMLButtonElement;
    const body = document.querySelector<HTMLBodyElement>(
      "body"
    ) as HTMLBodyElement;
    video.removeAttribute("class");
    video.setAttribute("class", "videoFalcon");
    video.setAttribute("muted", "false");
    main.setAttribute("class", "nobackground");
    video.play();
    btnSwitch.setAttribute("disabled", "true");
    localStorage.setItem("user", input.value);
    const cover = document.querySelector<HTMLDivElement>(
      ".cover"
    ) as HTMLDivElement;
    setTimeout(() => {
      cover.setAttribute("class", "coveractive");
      video.classList.add("opacity");
    }, 5400);
    setTimeout(() => {
      body.removeChild(header);
      body.removeChild(main);
      body.removeChild(footer);
      principal();
    }, 6400);
    setTimeout(() => {
      cover.setAttribute("class", "cover");
    }, 7400);
    setTimeout(() => {
      body.removeChild(video);
      body.removeChild(cover);
    }, 10000);
    setTimeout(() => {
      const anchor:HTMLAnchorElement=document.createElement('a');
      anchor.setAttribute('href','principal')
      anchor.click()
    }, 10050);
  } else {
    alert("Debes introducir un nombre!!");
  }
};
