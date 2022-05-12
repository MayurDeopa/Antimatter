import Head from "next/head";
import { useQuery } from "react-query";
import PageWrapper from "../../components/PageWrapper";
import { getProductCategories } from "../../services/api/products";
import Container from "../../components/Container";
import CardSkeleton from '../../components/Loaders/CardSkeleton'
import ErrorPopUp from "../../components/Misc/ErrorPopUp";
import AwaitButton from "../../components/Loaders/AwaitButton";
import Card from "../../components/Card";
import PrimarySpinner from "../../components/Loaders/PrimarySpinner";
import EmptyState from "../../components/Misc/EmptyState";

const Shop =()=>{
    const sample =[1,2,3,4,5,6]
    const {data,isLoading,error} = useQuery('getProductCategories',getProductCategories)
    if(error){
        return (
            <>
                <Head >
                    <title>Shop</title>
                </Head>
                    <PageWrapper>
                        <ErrorPopUp>
                            <h3>{error.name}</h3>
                            <AwaitButton
                                states={{
                                    text:"Go back",
                                    loading:false
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
                                <PrimarySpinner/>
                            </EmptyState>
                            :
                            <Container>
                                    {
                                        data.map((c,i)=>{
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