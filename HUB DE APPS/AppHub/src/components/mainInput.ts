export const mainInput=():HTMLInputElement=>{
    const input:HTMLInputElement=document.createElement('input')
    input.setAttribute('type',"text")
    input.setAttribute('placeholder','ej: Darth Maul')
    return input
}