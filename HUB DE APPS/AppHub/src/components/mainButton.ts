export const mainButton = (): HTMLButtonElement => {
  const btn: HTMLButtonElement = document.createElement("button");
  const h3: HTMLHeadingElement = document.createElement("h3");
  h3.innerHTML = "Start";
  btn.appendChild(h3);
  btn.setAttribute("id", "mainbutton");
  btn.addEventListener("click", () => {
    const video = document.querySelector<HTMLVideoElement>('#videoFalcon') as HTMLVideoElement
    const main = document.querySelector<HTMLElement>('main') as HTMLElement
    video.removeAttribute('class')
    video.setAttribute("class", "videoFalcon");
    video.setAttribute('muted','false')
    main.setAttribute('class','nobackground')
    video.play()
  });
  return btn;
};
