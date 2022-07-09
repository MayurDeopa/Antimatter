const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const emailValidator =value=>{
    if(!emailReg.test(value))return false;
    return true
}

export const shippingValidator=(values,state)=>{
    let error =false
    for(const item in state){
        if(!state[item]){
            values[item] = false
            error = true
            console.log('yuh')
        }
        else{
            values[item] = true;
            error = false 
        }
    }
    
    return {error,values};
    
}