export const num: number = 0;
export const mediaAnchor = (
  src: string,
  href: string,
  text = "",
  order = 1
): HTMLAnchorElement => {
  const a: HTMLAnchorElement = document.createElement("a");
  const h4: HTMLHeadingElement = document.createElement("h4");
  const img: HTMLImageElement = document.createElement("img");
  a.setAttribute("href", href);
  a.setAttribute("target","_blank")
  img.setAttribute("src", src);
  h4.innerHTML = text;
  if (order === 1) {
    a.appendChild(img);
    a.appendChild(h4);
  }
  if (order === 0) {
    a.appendChild(h4);
    a.appendChild(img);
  }
  return a;
};
