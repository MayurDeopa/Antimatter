import PageWrapper from "../../../components/PageWrapper"
import Head from "next/head"
import Card from "../../../components/Card"
import Container from "../../../components/Container"
import ErrorPopUp from "../../../components/Misc/ErrorPopUp"
import LinkBtn from "../../../components/Misc/LinkBtn"
import Breadcrumb from "../../../components/Navigations/Breadcrumb"



import { getProductCategories, getProductCategory } from "../../../services/api/products"

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
      fallback: false // false or 'blocking'
    };
  }

export async function getStaticProps(context) {
    const slug = context.params.category
    try{
        const data = await getProductCategory(slug)
        return {
            props: {
                products:data,
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
  



const Categories = ({products,category,error})=>{
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
                            {<Breadcrumb
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
                            />}
                            <Container>
                                {
                                    products.data.map((p,i)=>{
                                        return(
                                            <Card
                                                details={p}
                                                key={i}
                                                link={`/shop/${category}/${p.id}`}
                                            />
                                        )
                                    }) 
                                }
                            </Container> 
                        </> 
                             
                </PageWrapper>
            </>
        )
    }
    




export default Categories;