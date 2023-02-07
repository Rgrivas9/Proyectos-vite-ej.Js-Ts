import { imgButton } from "./imgButton"

export const gameFigure=(image:string,game:string,page:Function,id:string):HTMLElement=>{
    const figure:HTMLElement=document.createElement('figure')
    const a:HTMLAnchorElement=document.createElement('a')
    const img:HTMLImageElement=document.createElement('img')
    const body=document.querySelector<HTMLBodyElement>('body') as HTMLBodyElement
    img.setAttribute('src',image)
    a.appendChild(img)
    a.classList.add('wait')
    setTimeout(() => {
        a.classList.remove('wait')
    }, 3000);
    a.addEventListener('click',()=>{
        body.innerHTML=''
        page()})
    const div:HTMLDivElement=document.createElement('div')
    const div2:HTMLDivElement=document.createElement('div')
    div.setAttribute('class','scoreDiv')
    div2.setAttribute('class','infodiv')
    const infobutton:HTMLButtonElement=imgButton('https://res.cloudinary.com/di0zpa5yw/image/upload/v1675265110/gamesHub/info_gkkmvw.png','infoButton')
    const modal:HTMLParagraphElement=document.createElement('p')
    modal.setAttribute('class','pokeModal')
    modal.classList.add('pokeModalhidden')
    modal.innerHTML=`Consulta los 150 primeros pokemons y sus atributos. Al pasar por encima de cada uno se muestra la imagen de su versión shiny. 
    Del mismo modo al pasar por encima de las habilidades se abre un desplegable con su descripción. Selecciona dos y se muestra la posibilidad de hacr un combate
     con una mecánica simple en el que tendrás que demostrar conocimiento sobre como se afectan entre tipos de pokemon. Hay ataques efectivos, normales y ¡Nulos!`
    infobutton.addEventListener('click',()=>{
        modal.classList.toggle('pokeModalhidden')
    })
    const dificultyButton:HTMLButtonElement=document.createElement('button')
    dificultyButton.setAttribute('class','dificultyButton')
    
    const gameName:HTMLHeadingElement=document.createElement('h2')
    const score:HTMLHeadingElement=document.createElement('h4')
    gameName.innerHTML=game
    dificultyButton.innerHTML=localStorage.getItem(`${id}Dif`) as string
    score.innerHTML=`RECORD ${localStorage.getItem(`${id}Record${localStorage.getItem(`${id}Dif`)}`)}`
    if (localStorage.getItem(`${id}Record${localStorage.getItem(`${id}Dif`)}`)==null){
        localStorage.setItem(`${id}Dif`,'Easy')
        localStorage.setItem(`${id}RecordEasy`,`0000`)
        localStorage.setItem(`${id}RecordHard`,`0000`)
        dificultyButton.innerHTML=localStorage.getItem(`${id}Dif`) as string
        score.innerHTML=`RECORD ${localStorage.getItem(`${id}Record${localStorage.getItem(`${id}Dif`)}`)}`
    }
    dificultyButton.addEventListener('click',()=>{
        if (localStorage.getItem(`${id}Dif`) as string=='Easy'){
            localStorage.setItem(`${id}Dif`,'Hard')
            dificultyButton.innerHTML=localStorage.getItem(`${id}Dif`) as string
            score.innerHTML=`RECORD ${localStorage.getItem(`${id}Record${localStorage.getItem(`${id}Dif`)}`)}`

        }else {localStorage.setItem(`${id}Dif`,'Easy')
        dificultyButton.innerHTML=localStorage.getItem(`${id}Dif`) as string
        score.innerHTML=`RECORD ${localStorage.getItem(`${id}Record${localStorage.getItem(`${id}Dif`)}`)}`}

    })
    div.appendChild(score)
    div.appendChild(dificultyButton)
    div2.appendChild(modal)
    div2.appendChild(infobutton)
    figure.appendChild(div2)
    figure.appendChild(a)
    figure.appendChild(gameName)
    figure.appendChild(div)
    return figure
}