import Head from "next/head";
import { useQuery } from "react-query";
import PageWrapper from "../../components/PageWrapper";
import { getProductCategories } from "../../services/api/products";
import Container from "../../components/Container";
import CardSkeleton from '../../components/Loaders/CardSkeleton'
import ErrorPopUp from "../../components/Misc/ErrorPopUp";
import LinkBtn from "../../components/Misc/LinkBtn";
import Card from "../../components/Card";
import PrimarySpinner from "../../components/Loaders/PrimarySpinner";
import EmptyState from "../../components/Misc/EmptyState";

const Shop =()=>{
    const {data,isLoading,error} = useQuery('getProductCategories',getProductCategories)
    if(error){
        return (
            <>
                <Head >
                    <title>Shop</title>
                </Head>
                    <PageWrapper>
                        <ErrorPopUp>
                            <h3>{data.message}</h3>
                            <LinkBtn
                                states={{
                                    url:'/',
                                    text:"Go back"
                                }}
                            />    
                        </ErrorPopUp>                          
                    </PageWrapper>
            </>
        )
    }
    else{
        return (
            <>
                <Head >
                    <title>Shop</title>
                </Head>
                    <PageWrapper>
                        {
                            isLoading
                            ?
                            <EmptyState>
                                <PrimarySpinner
                                    size={'m'}
                                />
                            </EmptyState>
                            :
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
                        }    
                    </PageWrapper>
            </>
        )
    }
}
{/*<Card details={c} link={'/shop/'+c.slug} key={c.id}/>*/}

export default Shop;