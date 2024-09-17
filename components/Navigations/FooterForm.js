import { Button, Form, Input } from "material-gas-ui"
import { useState } from "react"
import { collect } from "../../services/api/collect"

const FooterForm = ()=>{

    const [email,setEmail] = useState('')
    const [isLoading,setIsLoading] = useState(false)

    const onSubscribe = async()=>{
        setIsLoading(true)
        const res = await collect.email(email)
        setIsLoading(false)
        console.log(res,email)
    }

    return(
        <Form styles={{flexDirection:'row',padding:'0px',gap:6,boxShadow:'none',zoom:'0.9',backgroundColor:'transparent'}} action={onSubscribe}>
            <Input type='email' placeholder='Email' required action={(e)=>setEmail(e.target.value)}/>
            <Button text={isLoading?'Subscribing':'Subscribe'} type='submit' styles={{width:200,color:'white',borderRadius:'4px',backgroundColor:'var(--primary-theme-color)'}} rippleColor="white" loading={isLoading}/>
        </Form>
    )
}

export default FooterForm