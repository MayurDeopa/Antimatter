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
import PageWrapper from '../components/PageWrapper'
import Form from '../components/Misc/Form'
import FormSection from '../components/Misc/FormSection'
import PrimarySpinner from '../components/Loaders/PrimarySpinner'
import Skeleton from '../components/Loaders/Skeleton'
import ButtonGroup from '../components/Misc/ButtonGroup'
import Head from 'next/head'
import Footer from '../components/Navigations/Footer'
 
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
        {/*<PageWrapper
          hideNavigation={true}
        >
          <Head>
            <title>AntiMatter Clothing</title>
            <meta name="description" content="Throw away all of your traditional fits" />
          </Head>
          <Form
            card={{
              title:"Launching Soon"
            }}
          >
            <FormSection>
              <ButtonGroup>
                  <AwaitButton
                    states={{
                      text:"Stay tuned ",
                      awaitState:'none'
                    }}
                  />
              </ButtonGroup>
            </FormSection>
          </Form>
                  </PageWrapper>*/}
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
          <Footer/>
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
