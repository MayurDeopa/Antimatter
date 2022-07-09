import { useState } from "react"
import { gateways } from "../PaymentGateways"
import { shippingValidator } from "../validators"
import { useStore } from "../context/StoreContext"


const usePayment =(data)=>{
    const {userState} = useStore()
    const [user,setUser] = userState
    const {personal,shipping} = user.details
    const [paymentGateways,setPaymentGateways] = useState(gateways)
    const [isPaying,setIsPaying] = useState(false)
    const [validInput,setValidInputs] =useState({
        "email":true,
        "phone":true,
        "name":true,
        "pincode":true,
        "address":true,
        "city":true,
        "state":true
    })
    let {error,values} = shippingValidator(validInput,data)
    const pay =async(p)=>{
        
        if(error){
            setValidInputs(values)
            return
        }
        if(!p.action) return
        const action = p.action
        setPaymentGateways(paymentGateways.map((g,i)=>g.name===p.name?{...g,state:'loading'}:{...g,state:'disabled'}))
        await action({
            amount:20000
        })
        setPaymentGateways(gateways)
    }
    return {paymentGateways,isPaying,validInput,pay}
}

export default usePayment;