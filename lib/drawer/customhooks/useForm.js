import { useState } from "react"
import { useEffect } from "react"
import {useRouter} from 'next/router'
import { getDetails, send, sendPersonal, sendShipping } from "../../../services/api/details"
import { useStore } from "../context/StoreContext"


const useForm = (details)=>{
    const {userDetails} = useStore()
    const {personal,shipping} = userDetails
    const [personalDetails,setPersonalDetails] = personal
    const [shippingDetails,setShippingDetails] = shipping
    const [data,setData] = useState()
    const [err,setErr] = useState()
    const [names,setNames] = useState([])
    const [awaiting,setAwaiting] = useState(false)
    const router = useRouter()
    if(!details.id) router.push('/user')
    useEffect(()=>{
        if(details.id){
            const fetchDetails = async()=>{
                setAwaiting(true)
                try{
                    const res = await getDetails(details.id)
                    if(details.formType==='personal'){
                        const propertyNames = Object.getOwnPropertyNames(res.details.personal)
                        setPersonalDetails(res.details.personal)
                        setData(res.details.personal)
                        setNames(propertyNames)
                    }
                    else{
                        const propertyNames = Object.getOwnPropertyNames(res.details.shipping)
                        setShippingDetails(res.details.shipping)
                        setNames(propertyNames)
                        setData(res.details.shipping)
                    }
                }catch(err){
                    setErr(err.message)
                }
                setAwaiting(false)
            }
            fetchDetails()
        }
    },[])

    const getUserDetails =async()=>{
        setAwaiting(true)
                const res = await getDetails(details.id)
                if(details.formType==='personal'){
                    const propertyNames = Object.getOwnPropertyNames(res.details.personal)
                    setPersonalDetails(res.details.personal)
                    setData(res.details.personal)
                    setNames(propertyNames)
                }
    }

    const saveDetails = async()=>{
        setAwaiting(true)
        if(details.formType==='personal'){
            const res = await sendPersonal()
            setAwaiting(false)
        }
        else{
            const res = await sendShipping()
            setAwaiting(false)
        }
    }
    return {awaiting,saveDetails,data,names}

}

export default useForm;