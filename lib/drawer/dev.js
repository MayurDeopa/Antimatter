


export const __DEV_ =()=>{
    if(typeof window !=='undefined'){
        return document.domain ==="localhost"
    }
}