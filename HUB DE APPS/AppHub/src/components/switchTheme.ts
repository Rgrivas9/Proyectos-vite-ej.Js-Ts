import { randomNumber } from "../utils/randomNumber";
import { switchColor } from "../utils/switch";

export const switchButton = (clas: string, img: string): HTMLButtonElement => {
  const btn: HTMLButtonElement = document.createElement("button");
  const image: HTMLImageElement = document.createElement("img");
  image.setAttribute("src", img);
  btn.setAttribute("class", clas);
  btn.appendChild(image);
  btn.addEventListener("click", () => {
    const n: number = randomNumber();
    switchColor(n,'body');
    switchColor(n,'header');
    switchColor(n,'main');
    switchColor(n,'input');
    switchColor(n,'#mainbutton');
    switchColor(n,'footer');
  });
  return btn;
};
