import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import PageWrapper from '../components/PageWrapper'
import {BiRightArrowAlt} from 'react-icons/bi'
import styles from '../styles/Home.module.css'

export default function Home() {
  
  return (
    <div className='page'>
      <Head >
        <title>Anti-Matter</title>
      </Head>
      <div 
        className={styles.home_image_container}
        style={{
          backgroundImage:'url("https://i.ibb.co/yfzmWt7/1298817-D-6-C08-4685-9-C04-B744-DF55-A64-E-2.jpg")'
        }}>
          <PageWrapper>
          <div className={styles.home_image_text}>
            <h1>Gfagfagfag</h1>
            <h2>Some random quote</h2>
            <Link href={'/shop'}>
                <h3 className={styles.home_buttons}>
                  View Collection
                  <BiRightArrowAlt/>
                </h3>
              </Link>
          </div>
          </PageWrapper>
      </div>
    </div>
  )
}
