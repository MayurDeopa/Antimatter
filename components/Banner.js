import { Container, Form, Input } from 'material-gas-ui';
import Head from 'next/head';
import { useState } from 'react';
import { toast } from 'react-toastify';
import  OptInput from '../components/Misc/OptInput';
import SubHeading from './Typography/SubHeading'
import GasButton from '../components/Loaders/GasButton'

const sendEmail =async(email)=>{
    if(!email){
        return;
    }
    try{
        const res = await fetch('/api/email',{
            method:"post",
            headers:{"Content-Type" :"application/json"},
            body:JSON.stringify({
                email:email
        })})
        const data = await res.json()
        if(data.success){
            toast.success('Email has been sent')
        }
        else{
            toast.error(data.message || 'Something went wrong')
        }
    }catch(err){
        toast.error('Error : '+data)
    }
}

const Banner =()=>{

    const [email,setEmail] = useState('')

    return (
        <div className="global_banner">
            <Head>
                <title>AntiMatter | Coming Soon !</title>
            </Head>
            <h1 style={{fontSize:'70px'}}>SOON </h1>
            <Form styles={{boxShadow:'none',gap:'1rem',padding:'5px'}} action={()=>sendEmail(email)}>
                <p style={{
                    textAlign:'center'
                }}>Enter your email to get notified!!</p>
                <Container>
                    
                    <Input 
                        value={email}
                        action={(e)=>setEmail(e.target.value)}
                        isValid={true}
                        placeholder={'Email'}
                        type='email'
                        required
                    />
                    <GasButton
                        styles={{
                            borderRadius:'4px'
                        }}
                    text='Submit'
                    disabled={!email.length}
                    type='submit'
                    />
                </Container>
            </Form>
        </div>
    )
}

export default Banner;