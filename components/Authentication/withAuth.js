import {useRouter} from 'next/router'
import { useEffect } from 'react'
import { useStore } from '../../lib/drawer/context/StoreContext'
import ModalSpinner from '../Loaders/ModalSpinner'

const withAuth =(Component)=>{
    const AuthenticatedComponent = (props)=>{
        const router = useRouter()
        const {userState} = useStore()
        const [user,setUser] = userState
        useEffect(()=>{
            if(!user) router.replace('/user')
        },[])
        if(user){
            return <Component {...props}/>
        }
        else{
            return <ModalSpinner/>
        }
    }
    return AuthenticatedComponent
}

export default withAuth;