export const imgButton=(image:string,att:string):HTMLButtonElement=>{
    const btn:HTMLButtonElement=document.createElement('button')
    const img:HTMLImageElement=document.createElement('img')
    img.setAttribute('src',image)
    btn.appendChild(img)
    btn.setAttribute('class',att)
    return btn
}