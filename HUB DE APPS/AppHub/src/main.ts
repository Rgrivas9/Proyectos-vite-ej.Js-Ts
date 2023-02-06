import "./style.css";
import { main } from "./pages/00.main/00main";

main()
const switchTheme=document.querySelector<HTMLButtonElement>('.mainSwitchTheme') as HTMLButtonElement
localStorage.getItem('colour') ? switchTheme : switchTheme.click()
