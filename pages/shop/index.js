import Head from "next/head";
import PageWrapper from "../../components/PageWrapper";
import { getProductCategories } from "../../services/api/products";
import Container from "../../components/Container";
import NewImage from '../../components/NewImage'
import Link from "next/link";
import GridImage from "../../components/GridImage";

const Shop = ({ data }) => {

    const categories = data.data

    return (
        <>
            <Head >
                <title>Shop | AntiMatter</title>
            </Head>
            <PageWrapper>
                <>
                    <Container>
                        {
                            categories.map((c, i) => {

                                let catergory = c.assets[0]
                                return (
                                    <GridImage
                                        key={i}
                                        src={catergory.url}
                                        height={catergory.image_dimensions.height}
                                        width={catergory.image_dimensions.width}
                                        href={`/shop/${c.slug}`}
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

{/*<Card details={c} link={'/shop/'+c.slug} key={c.id}/>*/ }


export async function getStaticProps() {
    const data = await getProductCategories()

    return {
        props: {
            data,
        },
    }
}


export default Shop;