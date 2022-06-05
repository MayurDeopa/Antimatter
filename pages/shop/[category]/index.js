import PageWrapper from "../../../components/PageWrapper"
import Head from "next/head"
import Card from "../../../components/Card"
import Container from "../../../components/Container"
import ErrorPopUp from "../../../components/Misc/ErrorPopUp"
import LinkBtn from "../../../components/Misc/LinkBtn"
import Breadcrumb from "../../../components/Navigations/Breadcrumb"



import { getProductCategories, getProductCategory } from "../../../services/api/products"





const Categories = ({data,category,error})=>{
        if(error){
            return(
                <>
                    <Head>
                        {error}
                    </Head>
                    <PageWrapper>
                        <ErrorPopUp
                        >
                            <h3>No such category found</h3>
                            <LinkBtn
                                text={'Go back'}
                                url='/shop'
                            />
                        </ErrorPopUp>
                    </PageWrapper>
                </>
            )
        }
        return (
            <>
                <Head >
                    <title>{category}</title>
                </Head>
                <PageWrapper>   
                    
                        <>
                            <Breadcrumb
                                paths={[
                                    {
                                        title:'Shop',
                                        path:'/shop'
                                    },
                                    {
                                        title:category,
                                        path:`/shop/${category}`
                                    }
                                ]}
                            />
                            <Container>
                                {
                                    data.list.map((p)=>{
                                        return <Card details={p} key={p.id} link={`/shop/${category}/${p.id}`}/>
                                    })
                                    
                                }
                            </Container> 
                        </> 
                             
                </PageWrapper>
            </>
        )
    }
    


export async function getStaticPaths() {
    const ways = await getProductCategories()
    const actualWays = ways.data
    const paths = actualWays.map((p)=>{
        return {
            params:{
                category:p.slug
            }
        }
    })
    return {
      paths,
      fallback: true // false or 'blocking'
    };
  }

export async function getStaticProps(context) {
    const slug = context.params.category
    try{
        const data = await getProductCategory(slug)
        if(data.status==='failed'){
            return {
                props: {
                    error:data.message
                },
            }
        }
        return {
            props: {
                data:data,
                category:slug
            },
        }
    }catch(err){
        return {
            props: {
                error:err.message
            },
        }
    }
  }
  

export default Categories;