import { useState } from "react"
import { useEffect } from "react"
import {useRouter} from 'next/router'
import { getDetails, send, sendDetails} from "../../../services/api/details"
import { useStore } from "../context/StoreContext"


const useForm = (details)=>{
    const {userState} = useStore()
    const [user,setUser] = userState
    const [data,setData] = useState()
    const [err,setErr] = useState()
    const [names,setNames] = useState([])
    const [awaiting,setAwaiting] = useState(true)
    const router = useRouter()
    if(!details.id) router.push('/user')
    useEffect(()=>{
        if(!user.details){
            if(details.id){
                const fetchDetails = async()=>{
                    setAwaiting(true)
                    try{
                        const res = await getDetails(details.id)
                        if(res.status==='ok') setUser({...user,details:res.details})
                        else setErr(res.message)
                    }catch(err){
                        setErr(err.message)
                    }
                }
                fetchDetails()
            }

        }
        else{
            setAwaiting(false)
        }
    },[user])


    const saveDetails = async(data)=>{
        setAwaiting(true)
        await sendDetails({id:user._id,details:data})
        setAwaiting(false)
    }
    return {awaiting,saveDetails,data,err}

}

export default useForm;