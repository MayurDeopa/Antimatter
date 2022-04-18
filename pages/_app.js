import NextNProgress from 'nextjs-progressbar'
import { useState,useEffect } from 'react'
import StoreContext, { Store } from '../lib/drawer/context/StoreContext'
import { QueryClientProvider,QueryClient } from 'react-query'
import '../styles/globals.css'
import useToken from '../lib/drawer/customhooks/useToken'
import Layout from '../components/Layout'
import ModalSpinner from '../components/Loaders/ModalSpinner'
import Toast from '../components/Misc/Toast'
import Message from '../components/basic/Message'
 
function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient()
  const {isLoading,data,err}= useToken()
  const [user,setUser] = useState()
  const [cart,setCart] = useState()
  const [drawer,setDrawer] = useState(true)
  const [shippingDetails,setShippingDetails] = useState()
  const [personalDetails,setPersonalDetails] = useState()
    const states ={
      userState:[user,setUser],
      cartState:[cart,setCart],
      userDetails:{
        personal:[personalDetails,setPersonalDetails],
        shipping:[shippingDetails,setShippingDetails]
      },
      drawerState:[drawer,setDrawer]
    }
  useEffect(()=>{
    if(data){
      setUser(data)
    }
  },[data])
  return (
    <QueryClientProvider client={queryClient}>
      <StoreContext states={states}>
      {
        isLoading
        ?
        <ModalSpinner/>
        :
        <Layout>
          <NextNProgress 
        color='var(--secondary-theme-color)'
      />
        <Component {...pageProps}/>
        </Layout>
      }
      {
        err
        ?
        <Toast>
          <Message states={{
            message:err,
            type:'failed'
          }}/>
        </Toast>
        :
        null
      }
      </StoreContext>
    </QueryClientProvider>
  )
}

export default MyApp
