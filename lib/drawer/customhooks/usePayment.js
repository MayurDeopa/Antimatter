import { useEffect, useState } from "react"
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
    const [countriesData,setCountriesData] = useState({})
    const [states,setStates] = useState({})
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

    const fetchCountries =async(id)=>{
        const {countries} = await commerce.services.localeListShippingCountries(id)
        setInput('country',Object.keys(countries)[0])
        setCountriesData(countries)
    }

    const fetchStates =async(id,code)=>{
        const {subdivisions} = await commerce.services.localeListShippingSubdivisions(id,code)
        setInput('state',Object.keys(subdivisions)[0])
        setStates(subdivisions)
    }

    const inputValidator =()=>[
        
    ]

    return {paymentGateways,isPaying,pay,data,setData,setInput,generateToken,checkoutData,fetchCountries,countriesData,fetchStates,states}
}

export default usePayment;