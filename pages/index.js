import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import PageWrapper from '../components/PageWrapper'
import {BiRightArrowAlt} from 'react-icons/bi'
import styles from '../styles/Home.module.css'
import ImageSlider from '../components/Display/ImageSlider'

export default function Home() {
  
  return (
    <PageWrapper>
      <Head >
        <title>Anti-Matter</title>
      </Head>
      <ImageSlider>
        <div 
          className={styles.home_image_container}
          style={{
            backgroundImage:'url("https://i.ibb.co/rmXt8JQ/COMPARISON-DESTORYS-PERSONALITY.jpg")'
          }}>
            <div className={styles.home_image_text}>
              <h1>New Beginings</h1>
              <h2>Comparison destroys</h2>
              <h1>PERSONALITY</h1>
              <Link href={'/shop'}>
                  <h3 className={styles.home_buttons}>
                    View Collection
                    <BiRightArrowAlt/>
                  </h3>
                </Link>
            </div>
        </div>
      </ImageSlider>
    </PageWrapper>
  )
}
