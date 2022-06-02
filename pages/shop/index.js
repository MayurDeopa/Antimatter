import Head from "next/head";
import PageWrapper from "../../components/PageWrapper";
import { getProductCategories } from "../../services/api/products";
import Container from "../../components/Container";
import Card from "../../components/Card";
import Breadcrumb from "../../components/Navigations/Breadcrumb";

const Shop =({data})=>{

    
        return (
            <>
                <Head >
                    <title>Shop</title>
                </Head>
                    <PageWrapper>              
                            <>
                                <Breadcrumb
                                    paths={[
                                        {
                                            title:'Home',
                                            path:'/'
                                        }
                                    ]}
                                />
                                <Container>
                                    {
                                        data.data.map((c,i)=>{
                                            return(
                                                <Card 
                                                    details={c}
                                                    link={`/shop/${c.slug}`}
                                                    key={i}
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

{/*<Card details={c} link={'/shop/'+c.slug} key={c.id}/>*/}


export async function getStaticProps() {
    const data = await getProductCategories()

    return {
      props: {
        data,
      },
    }
  }
  

export default Shop;