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
  const {isLoading,data,err,setErr}= useToken()
  const [user,setUser] = useState()
  const [cart,setCart] = useState()
  const [drawer,setDrawer] = useState(true)
  const [toasts,setToasts] = useState([])
    const states ={
      userState:[user,setUser],
      cartState:[cart,setCart],
      toastState:[toasts,setToasts],
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
        <>
          <NextNProgress 
            color='var(--secondary-theme-color)'
          />
          <Component {...pageProps}/>
        </>
      }
      {
        err
        &&
        <Toast>
          <Message states={err}/>
        </Toast>
        
      }
      </StoreContext>
    </QueryClientProvider>
  )
}

export default MyApp
