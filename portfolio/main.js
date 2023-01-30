import "./style.css";
import { changeTheme } from "./components/navBar/navBar";
import { linkPage } from "./utils/linkPage";
import { Navbar } from "./components/navBar/navBar";
import { Footer } from "./components/footer/footer";
import { Home } from "./pages/home/home";
import { Projects } from "./pages/projects/projects";
import { Divider } from "./components/divider/divider";

const header = document.querySelector("header");
header.innerHTML = Navbar();
const footer = document.querySelector("footer");
footer.innerHTML = Footer();

linkPage("#homelink", Home);
linkPage("#projectslink", Projects);

Home();

changeTheme();

footer.insertAdjacentHTML("beforebegin", Divider());