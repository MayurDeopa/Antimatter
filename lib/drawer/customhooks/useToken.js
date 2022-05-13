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
                    try{
                        const res = await login(person)
                        if(res.status==='ok'){
                            try{
                                const user = jwt.decode(res.user,123)
                                setData(user.response)
                            }
                            catch(error){
                                setErr({
                                    type:'failed',
                                    message:error.message
                                })
                            }
                        }
                        else{
                            setErr({
                                type:'failed',
                                message:res.message
                            })
                        }
                    }catch(error){
                        setErr({
                            type:"failed",
                            message:error.message
                        })
                    }
                }
            }
            else{
                localStorage.removeItem('key')
            }
            setIsLoading(false)
        }
        initialFetch()
    },[])
    return {isLoading,data,err,setErr}
}

export default useToken;