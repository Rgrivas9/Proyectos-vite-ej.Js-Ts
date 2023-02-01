export const eventMainButton = (): void => {
  const input = document.querySelector<HTMLInputElement>(
    "input"
  ) as HTMLInputElement;
  if (input.value !== "") {
    const video = document.querySelector<HTMLVideoElement>(
      "#videoFalcon"
    ) as HTMLVideoElement;
    const main = document.querySelector<HTMLElement>("main") as HTMLElement;
    const header = document.querySelector<HTMLElement>("header") as HTMLElement;
    const footer = document.querySelector<HTMLElement>("footer") as HTMLElement;
    const btnSwitch = document.querySelector<HTMLButtonElement>(
      ".mainSwitchTheme"
    ) as HTMLButtonElement;
    const body=document.querySelector<HTMLBodyElement>('body') as HTMLBodyElement
    video.removeAttribute("class");
    video.setAttribute("class", "videoFalcon");
    video.setAttribute("muted", "false");
    main.setAttribute("class", "nobackground");
    video.play();
    btnSwitch.setAttribute("disabled", "true");
    localStorage.setItem("user", input.value);
    const cover=document.querySelector<HTMLDivElement>('.cover') as HTMLDivElement
    setTimeout(()=>{cover.setAttribute('class','coveractive')},5400)
    setTimeout(()=>{cover.setAttribute('class','cover')},7400)
    setTimeout(()=>{body.removeChild(header);body.removeChild(main);body.removeChild(footer)},6400)
  } else {
    alert("Debes introducir un nombre!!");
  }
};
