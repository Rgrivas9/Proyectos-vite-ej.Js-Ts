export const switchColor = (n:number,id:string):void=>{
    const element=document.querySelector<HTMLElement>(id) as HTMLElement;
    let classname:string=''
    if (id[0]==='#'){classname=id.slice(1,id.length)}else{classname=id}
    element.removeAttribute('class')
    element.setAttribute('class',`${classname}${n}`)
}