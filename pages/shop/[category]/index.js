import PageWrapper from "../../../components/PageWrapper"
import Head from "next/head"
import Container from "../../../components/Container"
import ErrorPopUp from "../../../components/Misc/ErrorPopUp"
import LinkBtn from "../../../components/Misc/LinkBtn"
import Breadcrumb from "../../../components/Navigations/Breadcrumb"



import { getProductCategories, getProductCategory } from "../../../services/api/products"
import GridImage from "../../../components/GridImage"






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
                    <title>{category + ' | AntiMatter'}</title>
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
                                            <GridImage
                                                key={i}
                                                product
                                                href={`/shop/${category}/${p.id}`}
                                                src={p.image.url}
                                                height={p.image.image_dimensions.height}
                                                width={p.image.image_dimensions.width}
                                                name={p.name}
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
    

    export async function getStaticPaths() {
        const categories = await getProductCategories()
        const paths = categories.data.map((p,i)=>{
            return{
                params:{
                    category:p.slug
                }
            }
        })
        return{
            paths,
            fallback:false
        }
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
      
    


export default Categories;