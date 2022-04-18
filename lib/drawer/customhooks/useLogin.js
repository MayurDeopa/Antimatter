import { useState } from "react";
import { useContext } from "react";
import { Store } from "../context/StoreContext";
import {loginWithGoogle} from '../../../services/api/user.authentication'
import {decodeJwt} from '../../../lib/drawer/decode'

export default function useLogin(){
    const {userState} = useContext(Store)
    const [user,setUser] = userState
    const [err,setErr] = useState(false)
    const [isSpinning,setIsSpinning] = useState(false)

    const loginWithGoogleFireBase =async()=>{
        setIsSpinning(true)
        try{
            const res = await loginWithGoogle()
            if(res.status==="ok"){
                setErr(false)
                localStorage.setItem('key',JSON.stringify(res.user))
                setUser(decodeJwt(res.user))
                setIsSpinning(false)
            }
        }catch(error){
            console.log(error)
            setErr(true)
            setIsSpinning(false)
        }

    }
    return {isSpinning,err,loginWithGoogleFireBase,user};
}