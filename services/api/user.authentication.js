import { signInWithPopup,GoogleAuthProvider } from 'firebase/auth'
import {authentication} from '../../firebase/firebase.config'

export const login =async(data)=>{
    try{
        const res = await fetch(`https://antimatter-server.herokuapp.com/login`,{
            method:"post",
            headers:{"Content-Type" :"application/json"},
            body:JSON.stringify({
                email:data.email,
                username:data.displayName,
                verified:data.emailVerified
            })
        })
        return res.json()
    }
    catch(err){
        console.log(err)
        return err
    }
}

export const loginWithGoogle = async()=>{
    const authProvider = new GoogleAuthProvider()
    const res = await signInWithPopup(authentication,authProvider)
    try{
        const response = await login(res.user)
        return response
    }catch(err){
        console.log(err)
    }
}

export const logout =()=>{
    console.log('logout')
    localStorage.removeItem('key')
    window.location.href ='/user'
}