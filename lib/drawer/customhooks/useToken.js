import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Store } from "../context/StoreContext";
import jwt from 'jsonwebtoken'
import { login } from "../../../services/api/user.authentication";
import { useRouter } from "next/router";

const useToken =()=>{
    const router = useRouter()
    const [data,setData] = useState()
    const [err,setErr] = useState()
    const [isLoading,setIsLoading] =useState(true)
    useEffect(()=>{
        const initialFetch =async()=>{
            const token = localStorage.getItem('key')
            if(token){
                const person = jwt.decode(JSON.parse(token))
                if(person){
                    const res = await login(person)
                    if(res.status==='ok'){
                        const user = jwt.decode(res.user)
                        try{
                            setData(user)
                            setIsLoading(false)
                        }
                        catch(err){
                            setErr(err.message)
                            setIsLoading(false)
                        }
                    }
                    else{
                        setErr(res.message)
                        setIsLoading(false)
                    }
                }
            }
            else{
                localStorage.removeItem('key')
                setIsLoading(false)
            }
        }
        initialFetch()
    },[])
    return {isLoading,data,err}
}

export default useToken;