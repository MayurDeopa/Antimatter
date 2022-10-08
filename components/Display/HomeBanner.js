import styles from '../../styles/Home.module.css'

import Image from 'next/image'
import LinkBtn from '../Misc/LinkBtn'
import {BiRightArrowAlt} from 'react-icons/bi'
import BlurImage from '../Misc/BlurImage'
import Link from 'next/link'

const HomeBanner =({d})=>{
  const customCss = JSON.parse(d.containerCss)
    return(
        <div 
            className={styles.home_image_container}>
              <Link
                href={'/shop/t-shirts/prod_VKXmwDE8rWorgD'}
              >
                <div className={styles.home_image}>
                <BlurImage
                  src={d.img}
                  width={600}
                  height={600}
                  layout={'intrinsic'}
                />
                </div>
                </Link>
              <div 
                className={styles.home_image_text}>
                <h1 className='header'>{d.title}</h1>
                <p>{d.description}</p>
                <LinkBtn
                  text={`View Collection`}
                  icon={<BiRightArrowAlt/>}
                  url={d.link}
                  width={'20rem'}
                />
            </div>
        </div>
    )
}

export default HomeBanner;