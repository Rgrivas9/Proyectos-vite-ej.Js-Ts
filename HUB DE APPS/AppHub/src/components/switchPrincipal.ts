import { randomNumber } from "../utils/randomNumber";
import { switchColor } from "../utils/switch";

export const switchPrincipal=():void=>{
    const n: number = randomNumber();
    localStorage.setItem("colour", n.toString());
    switchColor(n,'#principalB');
    switchColor(n,'#principalNav');
    switchColor(n,'#principalSection');
}