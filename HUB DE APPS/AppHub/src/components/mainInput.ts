export const mainInput=():HTMLInputElement=>{
    const input:HTMLInputElement=document.createElement('input')
    const user:string=localStorage.getItem("user") as string
    input.setAttribute('type',"text")
    input.setAttribute('placeholder','ej: Darth Maul')
    if (user!=null){input.setAttribute('value',user)}
    return input
}