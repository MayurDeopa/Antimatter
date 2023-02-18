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

const Banner =()=> {

    const [email,setEmail] = useState('')
    const [isLoading,setIsLoading] = useState(false)
    const handleSubmit =async(data)=>{
        setIsLoading(true)
        await sendEmail(data)
        setIsLoading(false)
    }
    return (
        <div className="global_banner">
            <Head>
                <title>AntiMatter | Coming Soon !</title>
            </Head>
            <h1 style={{fontSize:'80px'}}>SOON </h1>
            <Form styles={{boxShadow:'none',gap:'1rem',padding:'5px'}} action={()=>handleSubmit(email)}>
                <p style={{
                    textAlign:'center'
                }}>Drop your email to get notified!!</p>
                <Container
                    styles={{
                        flexDirection:'column'
                    }}
                >
                    
                    <Input 
                        value={email}
                        action={(e)=>setEmail(e.target.value)}
                        isValid={true}
                        placeholder={'Email'}
                        type='email'
                        required
                        disabled={isLoading}
                    />
                    <GasButton
                        styles={{
                            borderRadius:'4px',
                            width:'100%',
                            backgroundColor:'var(--primary-theme-color)'
                        }}
                        text='Submit'
                        disabled={!email.length}
                        type='submit'
                        loading={isLoading}
                        rippleColor='var(--secondary-theme-color)'
                        rippleTimeout={600}
                    />
                </Container>
            </Form>
        </div>
    )
}

export default Banner;