import { useEffect, useState } from "react"
import { gateways } from "../PaymentGateways"
import { useStore } from "../context/StoreContext"
import {shippingValidator} from '../validators'
import { commerce } from "../commerce"
import { setScroll } from "../disableScroll"


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
    const [countriesData,setCountriesData] = useState({})
    const [states,setStates] = useState({})
    const [checkoutData,setCheckoutData] = useState()
    const [err,setErr]= useState(false)
    const [paymentGateways,setPaymentGateways] = useState(gateways)
    const [isPaying,setIsPaying] = useState(false)

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
    }

    const handleCheckoutCapture =async()=>{
        setIsPaying(true)
        setScroll(true)
        const orderData = {
            line_items: checkoutData.live.line_items,
            customer: {
              firstname: data.firstname,
              lastname: data.lastname,
              email: data.email,
            },
            shipping: {
              name: data.name,
              street: data.street,
              town_city: data.town_city,
              county_state: data.state,
              postal_zip_code: data.pincode,
              country: data.country,
            },
            fulfillment: {
              shipping_method: checkoutData.shipping_methods[0].id,
            },
            payment: {
              gateway: 'razorpay',
              razorpay:{
                payment_id:'gway_3wpgx6AxvMz4lY'
              }
            },
        }
        try{
            const order = await commerce.checkout.capture(checkoutData.id,orderData)
        }catch(err){
            console.log(err)
        }
        setScroll(false)
        setIsPaying(false)
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


    return {paymentGateways,isPaying,data,setData,setInput,generateToken,checkoutData,fetchCountries,countriesData,fetchStates,states,handleCheckoutCapture}
}

export default usePayment;