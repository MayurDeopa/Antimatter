import PageWrapper from "../../../components/PageWrapper"
import Head from "next/head"
import Card from "../../../components/Card"
import Container from "../../../components/Container"
import { useRouter } from "next/router"
import { useQuery } from "react-query"
import { getProductCategory } from "../../../services/api/products"
import { useState } from "react"
import { useEffect } from "react"
import CardSkeleton from '../../../components/Loaders/CardSkeleton'
import ErrorPopUp from "../../../components/Misc/ErrorPopUp"
import LinkBtn from "../../../components/Misc/LinkBtn"

const Categories = ()=>{
    const [err,setErr] = useState()
    const [query,setQuery] = useState()
    const router = useRouter()
    const sample =[1,2,3,4,5,6]
    useEffect(async()=>{
        if(!router.isReady) return;
        const fetchSome =async()=>{
            const data = await getProductCategory(router.query.category)
            if(data.status==='ok'){
                setQuery(data.list)
            }
            else{
                setErr(data.message)
            }
        }
        fetchSome()
    },[router.isReady])
    if(err){
        return (
            <div className="page">
                <Head >
                    <title>{router.query.category}</title>
                </Head>
                <PageWrapper>   
                    <ErrorPopUp>
                        <h3>No products found</h3>
                        <LinkBtn
                            link={{
                                text:"Go back",
                                url:"/shop"
                            }}
                        />
                    </ErrorPopUp>
                </PageWrapper>
            </div>
        )
    }

    else{
        return (
            <>
                <Head >
                    <title>{router.query.category}</title>
                </Head>
                <PageWrapper>   
                        <Container>
                            {
                                query
                                ?
                                query.map((p)=>{
                                    return <Card details={p} key={p.id} link={`/shop/${router.query.category}/${p.id}`}/>
                                })
                                :
                                sample.map((s,i)=>{
                                    return(
                                        <CardSkeleton
                                            attributes={{
                                                loading:true
                                            }}
                                            key={i}
                                        />
                                    )
                                })
                            }
                        </Container>         
                </PageWrapper>
            </>
        )
    }
    
}

export default Categories;