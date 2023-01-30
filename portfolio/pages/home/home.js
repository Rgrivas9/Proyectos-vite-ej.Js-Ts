import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";

export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="home">
    <p>Hey, I'm</p>
    <h1>Rafael García</h1>
    <p>Desarrolador fullstack de Sevilla</p>
    <a href="rafaelgrcrvs@gmail.com">Say hi →</a>
    </section>`;
};