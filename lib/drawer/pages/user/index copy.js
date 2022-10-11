import Head from 'next/head'
import Image from 'next/image'
import PageWrapper from '../components/PageWrapper'



import ImageSlider from '../components/Display/ImageSlider'
import { getBannerData } from '../services/api/banners'
import HomeBanner from '../components/Display/HomeBanner'

export default function Home({banners}) {
  return (
    <PageWrapper
      padding={'0'}
    >
      <Head >
        <title>Anti-Matter</title>
      </Head>
      {/*banners.data.map((d,i)=>{
          return(
            <HomeBanner
              d={d}
              key={i}
            />
          )
        })*/}
    </PageWrapper>
  )
}


export async function getStaticProps() {
  const banners = await getBannerData('home')
  return {
    props: {
      banners,
    },
  }
}



