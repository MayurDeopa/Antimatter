import { useState } from "react"
import { gateways } from "../PaymentGateways"
import { useStore } from "../context/StoreContext"
import {shippingValidator} from '../validators'
import { commerce } from "../commerce"


const usePayment =()=>{
    const [data,setData] = useState({
        "email":"",
        "firstname":"",
        "lastname":"",
        "name":"",
        "street":"",
        "town_city":"",
        "state":"",
        "country":""
    })
    const [shippingData,setShippingData] = useState({

    })
    const [checkoutData,setCheckoutData] = useState()
    const [err,setErr]= useState(false)
    const [paymentGateways,setPaymentGateways] = useState(gateways)
    const [isPaying,setIsPaying] = useState(true)
    const pay =async(token)=>{
        const orderData = {
            line_items: checkoutData.live.line_items,
            customer: { firstname: data.firstname, lastname: data.lastname, email: data.email },
            shipping: { name: 'India', street: data.street, town_city: data.town_city, country: data.country },
            payment: {
              gateway: 'stripe',
              stripe: {
                payment_method_id:'fnahibhi',
              },
            },
          };
        setIsPaying(true)
        const res =  await commerce.checkout.capture(token,orderData)
        setIsPaying(false)
        
    }

    const setInput =(key,value)=>{
        setData({...data,[key]:value})
    }


    const generateToken =async(id)=>{
        try{
            const res = await commerce.checkout.generateToken(id,{type:'cart'})
            setCheckoutData(res)
        }catch(err){
            setErr(err)
        }
        setIsPaying(false)
    }

    const handleCheckoutCapture =async()=>{

    }

    return {paymentGateways,isPaying,pay,data,setData,setInput,generateToken,checkoutData}
}

export default usePayment;