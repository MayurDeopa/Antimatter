import { signInWithPopup,GoogleAuthProvider } from 'firebase/auth'
import apiUrl from '../../lib/drawer/url'
import {authentication} from '../../firebase/firebase.config'

export const login =async(data)=>{
    try{
        const res = await fetch(`${apiUrl}/login`,{
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

export const initialLogin =async(data)=>{
    try{
        const res = await fetch(`${apiUrl}/login?token=${data}`,{
            method:"get",
            headers:{"Content-Type" :"application/json"}
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
    console.log(res)
    try{
        const response = await login(res.user)
        return response
    }catch(err){
        console.log(err)
    }
}

export const logout =()=>{
    localStorage.removeItem('key')
    window.location.href ='/user'
}

export const loginUser = async()=>{
    console.log('some')
    try{
        const res = await fetch(`https://api.chec.io/v1/customers/email-token`,{
            method:"post",
            headers:{
                "X-Authorization": "pk_40545922c2cf56e8d3ca746610e66423e799d3578c3b0",
                "Content-Type": "application/json",
                "Accept": "application/json"},
            body:JSON.stringify({
                "email":"mayurdeopa@gmail.com",
                "base_url":"http://localhost:9090/contact"
            })
        })
        return res.json()
    }
    catch(err){
        console.log(err)
        return err
    }
}