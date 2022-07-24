import NextNProgress from 'nextjs-progressbar'
import { useState,useEffect } from 'react'
import StoreContext, { Store } from '../lib/drawer/context/StoreContext'
import { QueryClientProvider,QueryClient } from 'react-query'
import '../styles/globals.css'
import Router from 'next/router'
import useToken from '../lib/drawer/customhooks/useToken'
import ModalSpinner from '../components/Loaders/ModalSpinner'
import Toast from '../components/Misc/Toast'
import Message from '../components/basic/Message'
import Head from 'next/head'
import Footer from '../components/Navigations/Footer'
import Progress from '../components/Loaders/Progress'

 
function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient()
  const {isLoading,data,err,setErr}= useToken()
  const [user,setUser] = useState()
  const [cart,setCart] = useState()
  const [drawer,setDrawer] = useState(true)
  const [toasts,setToasts] = useState([])
  const [progress,setProgress] = useState(false)
  const [path,setPath] = useState(false)
    const states ={
      userState:[user,setUser],
      cartState:[cart,setCart],
      toastState:[toasts,setToasts],
      drawerState:[drawer,setDrawer],
      progressState:[progress,setProgress]
    }
  useEffect(()=>{
    if(data){
      setUser(data)
    }
  },[data])

  Router.events.on('routeChangeStart',()=>setPath(true))
  Router.events.on('routeChangeComplete',()=>setPath(false))
  return (
    <QueryClientProvider client={queryClient}>
      <StoreContext states={states}>     
        <>
          
          <Progress
            visible={progress}
          />
          <Component {...pageProps}/>
          <Footer/>
        </>
        {
          isLoading
          &&
          <Progress
            visible
          />
        }
        <Progress
          visible={path}
        />
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
