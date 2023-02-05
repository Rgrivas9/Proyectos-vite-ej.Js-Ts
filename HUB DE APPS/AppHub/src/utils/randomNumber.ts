export const randomNumber=():number=>{
    const n:number = Math.ceil(Math.random()*9)
    return n 
}
export const globalRandomNumber=(num:number):number=>{
    const n:number = Math.ceil(Math.random()*num)
    return n 
}