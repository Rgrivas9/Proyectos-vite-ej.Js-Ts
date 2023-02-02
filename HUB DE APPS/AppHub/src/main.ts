import "./style.css";
import { main } from "./pages/00.main/00main";
import { principal } from "./pages/01.0principal/principal";
import { ticTacToe } from "./pages/01.1.ticTacToe/ticTacToe";
import { preguntas } from "./pages/01.4.preguntas/preguntas";
import { ahorcado } from "./pages/01.2.ahorcado/ahorcado";
import { pokeapi } from "./pages/01.6.pokeapi/pokeapi";
import { wakamole } from "./pages/01.5.wakamole/wakamole";
import { memoria } from "./pages/01.3.memoria/memoria";
console.log(window.location.href);
const location: string = window.location.href.split("/").reverse()[0];
console.log(location);
if (location === "") {
  main();
}
if (location === "#principal") {
  principal();
}
if (location === "Pokemon") {
  pokeapi();
}
if (location === "Ahorcado") {
  ahorcado();
}
if (location === "3%20en%20raya") {
  ticTacToe();
}
if (location === "Memoria") {
  memoria();
}
if (location === "Banderas") {
  preguntas();
}
if (location === "Caza%20el%20topo") {
  wakamole();
}
