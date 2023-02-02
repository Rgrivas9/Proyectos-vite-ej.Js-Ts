
export const preguntas = ():void=>{
    const body = document.querySelector<HTMLBodyElement>('body') as HTMLBodyElement
    const nav:HTMLElement=document.createElement('nav')
    const h1:HTMLHeadingElement=document.createElement('h1')
    h1.innerHTML='preguntas'
    nav.appendChild(h1)
    body.appendChild(nav)
}