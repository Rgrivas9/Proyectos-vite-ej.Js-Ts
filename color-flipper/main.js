import "./style.css";

const COLOR_PALETTE = {
  "Por defecto": "#FFFFFF",
  "Raisin Black": "#28262C",
  "Blue Bell": "#998FC7",
  "Lavender Blue": "#D4C2FC",
  Magnolia: "#F9F5FF",
  "Resolution Blue": "#14248A",
};
const select = document.querySelector(".color-picker");
const h2 = document.querySelector(".h2")

const createOptions = () => {
  Object.keys(COLOR_PALETTE).forEach((color) => {
    const option = document.createElement("option");
    option.innerText = color;
    select.append(option);
  });
};
const AELselect = () => {
  select.addEventListener("change", (ev) => {
    const color = ev.currentTarget.value;
    document.body.style.backgroundColor = COLOR_PALETTE[color];
    h2.innerHTML = `${color} | ${COLOR_PALETTE[color]}`
  });
};

createOptions();
AELselect();
