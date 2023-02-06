export const stickyPK = () => {
    const div=document.querySelector<HTMLDivElement>('.divHeader') as HTMLDivElement
    const nav=document.querySelector<HTMLElement>('.nav2Poke') as HTMLElement
    if (window.pageYOffset > 80){
        div.classList.add('divHeaderSticky')
        nav.classList.add('navPokeSticky')
    }
    if (window.pageYOffset <= 80){
        div.classList.remove('divHeaderSticky')
        nav.classList.remove('navPokeSticky')
    }
};
