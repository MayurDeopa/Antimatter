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
import { commerce } from '../lib/drawer/commerce'

 
function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient()
  const [user,setUser] = useState()
  const [cart,setCart] = useState()
  const [drawer,setDrawer] = useState(true)
  const [toasts,setToasts] = useState([])
  const [progress,setProgress] = useState(false)
  const [path,setPath] = useState(false)
  const [visible,setVisible] = useState(false)
    const states ={
      userState:[user,setUser],
      cartState:[cart,setCart],
      toastState:[toasts,setToasts],
      drawerState:[drawer,setDrawer],
      progressState:[progress,setProgress],
      cartLoader:[visible,setVisible]
    }

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
        <Progress
          visible={path}
        />
      </StoreContext>
    </QueryClientProvider>
  )
}

export default MyApp
