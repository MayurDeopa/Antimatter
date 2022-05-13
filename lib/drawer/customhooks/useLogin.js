import { useState } from "react";
import { useContext } from "react";
import { Store } from "../context/StoreContext";
import {loginWithGoogle} from '../../../services/api/user.authentication'
import jwt from 'jsonwebtoken'

export default function useLogin(){
    const {userState} = useContext(Store)
    const [user,setUser] = userState
    const [err,setErr] = useState(false)
    const [isSpinning,setIsSpinning] = useState(false)

    const loginWithGoogleFireBase =async()=>{
        setErr(false)
        setIsSpinning(true)
        try{
            const res = await loginWithGoogle()
            if(res.status==="ok"){
                localStorage.setItem('key',JSON.stringify(res.user))
                setUser(jwt.decode(res.user,123))
                setIsSpinning(false)
            }
        }catch(error){
            setErr(true)
            setIsSpinning(false)
        }

    }
    return {isSpinning,err,loginWithGoogleFireBase,user};
}