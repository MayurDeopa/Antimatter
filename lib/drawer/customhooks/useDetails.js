import { useEffect, useState } from "react"
import { useStore } from "../context/StoreContext"
import { sendDetails } from "../../../services/api/details"


const useDetails =()=>{
    const {userState} = useStore()
    const [err,setErr] = useState()
    const [user,setUser] = userState
    const [data,setData] = useState({
        ...user.details.personal,
        ...user.details.shipping
    })
    const [isSpinning,setIsSpinning] = useState(false)

    const formAction = async(data)=>{

        setErr()
        setIsSpinning(true)
        try{
            const res = await sendDetails({
                id:user._id,
                details:data
            })
            let{name,email,phone,pincode,address,city,state} = res.details
            if(res.status==='ok'){
                setUser({
                    ...user,
                    details:{
                        ...user.details,
                        personal:{
                            name:name,
                            email:email,
                            phone:phone
                        },
                        shipping:{
                            pincode:pincode,
                            address:address,
                            city:city,
                            state:state
                        }
                    }
                })
            }
            else{
                setErr({
                    type:'failed',
                    message:res.message
                })
            }
        }catch(error){
            setErr({
                type:'failed',
                message:error
            })
        }
        setIsSpinning(false)
    }
    return {data,isSpinning,formAction,err,setData}
}

export default useDetails;