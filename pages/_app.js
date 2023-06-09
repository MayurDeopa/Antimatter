
import { useState,useEffect } from 'react'
import StoreContext from '../lib/drawer/context/StoreContext'
import { QueryClientProvider,QueryClient } from 'react-query'
import '../styles/globals.css'
import Router from 'next/router'
import { ToastContainer } from 'react-toastify'
import Banner from '../components/Banner'
import Progress from '../components/Loaders/Progress'
import { commerce } from '../lib/drawer/commerce'


import 'react-toastify/dist/ReactToastify.min.css'
import PageTransitionComponent from '../components/Display/PageTransitionComponent'
import { useTransition } from 'material-gas-ui'
 
function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient()
  const [user,setUser] = useState()
  const [cart,setCart] = useState()
  const [drawer,setDrawer] = useState(true)
  const [toasts,setToasts] = useState([])
  const [progress,setProgress] = useState(false)
  const [path,setPath] = useState(false)
  const [visible,setVisible] = useState(true)
  const [cartOpen,setCartOpen] = useState(false)
    const states ={
      userState:[user,setUser],
      cartState:[cart,setCart],
      toastState:[toasts,setToasts],
      drawerState:[drawer,setDrawer],
      progressState:[progress,setProgress],
      cartLoader:[visible,setVisible],
      cartDrawer:[cartOpen,setCartOpen]
    }
  useEffect(()=>{
    const initialRequest = async()=>{
      setVisible(true)
      const res= await commerce.cart.retrieve()
      setCart(res)
      setVisible(false)
    }
    initialRequest()
  },[])
  Router.events.on('routeChangeStart',()=>{
      setPath(true)
  })
  Router.events.on('routeChangeComplete',()=>{
    setPath(false)
  })

  const hasTranstioned = useTransition(path,1000)
  


  return (
    <QueryClientProvider client={queryClient}>
      <StoreContext states={states}>     
      {!hasTranstioned && (
        <>
          
        <Progress
          visible={progress}
        />
        <Component {...pageProps}/>
      </>
      )}
        <ToastContainer 
          autoClose={5000}
          position='top-right'
          hideProgressBar={false}
          closeOnClick
          newestOnTop={true}  
          theme='light'
        />
        {hasTranstioned && <PageTransitionComponent open={path}/>}
      </StoreContext>
    </QueryClientProvider>
  )
}

export default MyApp
