import { randomNumber } from "../utils/randomNumber";
import { switchColor } from "../utils/switch";

export const switchButton = (clas: string, img: string, main=0): HTMLButtonElement => {
  const btn: HTMLButtonElement = document.createElement("button");
  const image: HTMLImageElement = document.createElement("img");
  image.setAttribute("src", img);
  btn.setAttribute("class", clas);
  btn.appendChild(image);
  if (main===0){
  btn.addEventListener("click", () => {
    const n: number = randomNumber();
    localStorage.setItem("colour", n.toString());
    switchColor(n,'body');
    switchColor(n,'header');
    switchColor(n,'main');
    switchColor(n,'input');
    switchColor(n,'#mainbutton');
    switchColor(n,'footer');
  })}
  return btn;
};
