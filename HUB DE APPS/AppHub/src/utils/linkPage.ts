export const linkPage = (id:string, page:Function):void => {
    const link = document.querySelector<HTMLElement>(id) as HTMLElement;
    link.addEventListener("click", () => page());
  };