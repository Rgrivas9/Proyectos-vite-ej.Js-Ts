import { imgButton } from "./imgButton"

export const gameFigure=(image:string,game:string,scored='0000'):HTMLElement=>{
    const figure:HTMLElement=document.createElement('figure')
    const a:HTMLAnchorElement=document.createElement('a')
    const img:HTMLImageElement=document.createElement('img')
    img.setAttribute('src',image)
    a.appendChild(img)
    const div:HTMLDivElement=document.createElement('div')
    const infobutton:HTMLButtonElement=imgButton('https://res.cloudinary.com/di0zpa5yw/image/upload/v1675265110/gamesHub/info_gkkmvw.png','infoButton')
    const dificultyButton:HTMLButtonElement=document.createElement('button')
    dificultyButton.setAttribute('class','dificultyButton')
    dificultyButton.innerHTML='Easy'
    const gameName:HTMLHeadingElement=document.createElement('h2')
    const score:HTMLHeadingElement=document.createElement('h4')
    gameName.innerHTML=game
    score.innerHTML=scored
    div.appendChild(score)
    div.appendChild(dificultyButton)
    figure.appendChild(infobutton)
    figure.appendChild(a)
    figure.appendChild(gameName)
    figure.appendChild(div)
    return figure
}