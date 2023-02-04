import { eventMainButton } from "../utils/eventmainbutton";

export const mainButton = (): HTMLButtonElement => {
  const btn: HTMLButtonElement = document.createElement("button");
  const h3: HTMLHeadingElement = document.createElement("h3");
  localStorage.setItem('main','true')
  h3.innerHTML = "Start";
  btn.appendChild(h3);
  btn.setAttribute("id", "mainbutton");
  btn.addEventListener("click", () => {
    eventMainButton();
    localStorage.setItem('main','false')
  });
  
  window.addEventListener("keydown", (ev) => {
    if (localStorage.getItem('main')=='true'){
    if (ev.which === 13) {
      eventMainButton();
      localStorage.setItem('main','false')
    }}
  });
  return btn;
};
