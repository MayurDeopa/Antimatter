const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const emailValidator =value=>{
    if(!emailReg.test(value))return false;
    return true
}

export const shippingValidator=(values,state)=>{
    if (!state.email ) {
        values.email = false;
    }
    if (!state.phone) {
        values.phone = false
    }
    if (!state.name) {
        values.name = false
    }
    if (!state.pincode) {
        values.pincode = false
    }
    if (!state.address) {
        values.address = false
    }
    if (!state.city) {
        values.city = false
    }
    if (!state.state) {
        values.state = false
    }
    console.log(values)
    return values;
    
}