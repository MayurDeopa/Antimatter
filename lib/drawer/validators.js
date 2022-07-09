const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const emailValidator =value=>{
    if(!emailReg.test(value))return false;
    return true
}

export const shippingValidator=(values,state)=>{
    let error =false
    if (!state.email || !emailValidator(state.email)) {
        values.email = false;
        error = true 
    }
    else{
        values.email = true;
        error = false 
    }
    if (state.phone.length<10 ||state.phone.length>10) {
        values.phone = false
        error = true 
    }
    else{
        values.phone = true;
        error = false 
    }
    if (!state.name) {
        values.name = false
        error = true
    }
    else{
        values.name = true;
        error = false 
    }
    if (!state.pincode || state.pincode.length<6) {
        values.pincode = false
        error = true 
    }
    else{
        values.pincode = true;
        error = false 
    }
    if (!state.address) {
        values.address = false
        error = true 
    }
    else{
        values.address = true;
        error = false 
    }
    if (!state.city) {
        values.city = false
        error = true 
    }
    else{
        values.city = true;
        error = false 
    }
    if (!state.state) {
        values.state = false
        error = true 
    }
    else{
        values.state = true;
        error = false 
    }
    return {error,values};
    
}