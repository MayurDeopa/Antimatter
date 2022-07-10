import { useState } from "react"
import { gateways } from "../PaymentGateways"
import { useStore } from "../context/StoreContext"
import {shippingValidator} from '../validators'


const usePayment =()=>{
    const {userState} = useStore()
    const [user,setUser] = userState
    const {personal,shipping} = user.details
    const [data,setData] = useState({
        ...user.details.personal,
        ...user.details.shipping
    })
    const [err,setErr]= useState(false)
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
    {/*const shippingValidator=()=>{
        for(const item in data){
            if(!data[item]){
                console.log(item)
                setErr(true)
                setValidInputs({...validInput,[item]:false})
            }
            else{
                setValidInputs({...validInput,[item]:true})
                setErr(false)
            }
        }   
        return err;
    }*/}
    const validation=()=>{
        for(const item in data){
            if(!data[item]){
                return
            }
        } 
    }
    const pay =async(p)=>{
        validation()
        console.log("Some")
        
    }
    return {paymentGateways,isPaying,validInput,pay,data,setData}
}

export default usePayment;