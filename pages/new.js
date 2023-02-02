import { Container } from "material-gas-ui";
import NewImage from "../components/NewImage";
import PageWrapper from "../components/PageWrapper"
import SubHeading from "../components/Typography/SubHeading";


import { getProductCategory } from "../services/api/products";

import styles from '../styles/Image.module.css'

const NewHome =({data})=>{

    let stock = data.data[0]
    let first = stock.assets[0]
    let second = stock.assets[1]
    let third = stock.assets[2]
    let fourth = stock.assets[3]

    return(
        <PageWrapper
            style={{
                paddingLeft:0,
                paddingRight:0,
                paddingTop:0
            }}
        >
            <div className={styles.banner_wrapper}>
                <NewImage
                    src={first.url}
                    height={first.image_dimensions.height}
                    width={first.image_dimensions.width}
                />
            </div>
            <div className={styles.grid_container}>
                <Container styles={{
                    justifyContent:'center'
                }}>
                    <SubHeading h={1}>
                        EDITIORAL LOOKBOOK
                    </SubHeading>
                </Container>
                <div className={styles.wrapper}>
                    <NewImage
                        src={second.url}
                        height={second.image_dimensions.height}
                        width={second.image_dimensions.width}
                    />
                    <NewImage
                        src={third.url}
                        height={third.image_dimensions.height}
                        width={third.image_dimensions.width}
                    />
                </div>
                <div style={{width:'100%'}} >
                    <NewImage
                        src={fourth.url}
                        height={fourth.image_dimensions.height}
                        width={fourth.image_dimensions.width}
                    />
                </div>
                <Container styles={{
                    justifyContent:'center'
                }}>
                    <SubHeading>
                        VIEW
                    </SubHeading>
                </Container>
            </div>
        </PageWrapper>
    )
}

export async function getStaticProps() {
    const data = await getProductCategory('stock')

    return {
      props: {
        data,
      },
    }
  }
  

export default NewHome;