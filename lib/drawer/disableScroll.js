

export const setScroll =(value)=>{
    const body = document.getElementsByTagName('body')[0]
    body.style.overflowY = value?'hidden':'scroll'
}