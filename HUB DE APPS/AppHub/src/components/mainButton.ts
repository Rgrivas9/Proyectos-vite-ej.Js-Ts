export const mainButton = (): HTMLButtonElement => {
    const btn: HTMLButtonElement = document.createElement("button");
    const h3: HTMLHeadingElement = document.createElement("h3");
    h3.innerHTML = "Start";
    btn.appendChild(h3);
    btn.setAttribute('id','mainbutton')
    return btn;
  };
  