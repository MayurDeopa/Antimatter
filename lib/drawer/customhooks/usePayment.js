import { useEffect, useState } from "react"
import { gateways } from "../PaymentGateways"
import { useStore } from "../context/StoreContext"
import {shippingValidator} from '../validators'
import { commerce } from "../commerce"
import { setScroll } from "../disableScroll"
import { initializeRazorpay } from "../../../services/api/payment"

import { __DEV_ } from "../dev"
import { toast } from "react-toastify"

const usePayment =()=>{
    const [isFetching,setIsFetching] = useState(true)
    const [applyingDiscount,setApplyingDiscount] = useState(false)
    const [data,setData] = useState({
        "email":"",
        "firstname":"",
        "lastname":"",
        "name":"",
        "street":"",
        "town_city":"",
        "pincode":"",
        "state":"",
        "country":"",
        "discount":""
    })
    const [countriesData,setCountriesData] = useState({})
    const [states,setStates] = useState({})
    const [checkoutData,setCheckoutData] = useState()
    const [err,setErr]= useState()
    const [paymentGateways,setPaymentGateways] = useState(gateways)
    const [isPaying,setIsPaying] = useState(false)


    const setInput =(key,value)=>{
        setData({...data,[key]:value})
    }


    const startPaying = ()=>{
      setScroll(true)
      setIsPaying(true)
    }

    const stopPaying = ()=>{
      setScroll(false)
      setIsPaying(false)
    }

    const generateToken =async(id)=>{
        setScroll(true)
        try{
            const res = await commerce.checkout.generateToken(id,{type:'cart'})
            setCheckoutData(res)
        }catch(error){
          toast.error(error.message)
        }
        
    }

   

    const handleCheckoutCapture =async(paymentId)=>{
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
                payment_id:paymentId
              }
            },
        }
        try{
            const order = await commerce.checkout.capture(checkoutData.id,orderData)
            alert('check your email')
        }catch(error){
          toast.error(error.message)
        }
        setScroll(false)
        setIsPaying(false)
    }

    const makePayment = async(params,userData)=>{
      const res = await initializeRazorpay();
      if (!res) {
        alert("Razorpay SDK Failed to load");
        return;
      }
      try{
        const first = await fetch(`/api/razorpay`,{
          method:"POST",
          headers:{"Content-Type" :"application/json"},
          body:JSON.stringify(params)
        })
        const middle = await first.json()
        const options = {
          key:  process.env.RAZORPAY_KEY_ID || "rzp_test_Xo7VXINAoloD9k",
          /*currency: data.currency,*/
          amount: middle.amount,
          name: 'Anti Matter',
          description: 'Thank you for purchasing .',
          prefill:{
            email:userData.email,
            name:userData.name
          },
          handler: function (response) {
            handleCheckoutCapture(response.razorpay_payment_id)
          }
          
        }
        const paymentObject = new window.Razorpay(options)
        paymentObject.open()
      }catch(error){
        toast.error(error.message)
      }
  
  }

    const handlePayment = async(amount)=>{

      startPaying()
      try{
        await  makePayment({amount:amount},{email:data.email,name:data.firstname})
      }catch(error){
        toast.error(error.message)
      }
      stopPaying()
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
        setScroll(false)
        setIsFetching(false)
    }

    const applyDiscount =async()=>{
      setApplyingDiscount(true)
      try{
        const res = await commerce.checkout.checkDiscount(checkoutData.id,{
          code:data.discount
        })
        if(res.id){
          setCheckoutData(res)
          toast.success('Code applied')
        }
        else{
          toast.error('Invalid code')
        }
      }catch(error){
        setErr(error.message)
      }
      setApplyingDiscount(false)
    }

    return {paymentGateways,isPaying,data,setData,setInput,generateToken,checkoutData,fetchCountries,countriesData,fetchStates,states,handleCheckoutCapture,err,isFetching,makePayment,handlePayment,applyDiscount,applyingDiscount}
}

export default usePayment;