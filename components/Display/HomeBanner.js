import styles from '../../styles/Home.module.css'

import Image from 'next/image'
import LinkBtn from '../Misc/LinkBtn'
import {BiRightArrowAlt} from 'react-icons/bi'

const HomeBanner =({d})=>{
  const customCss = JSON.parse(d.containerCss)
    return(
        <div 
        style={customCss}
            className={styles.home_image_container}>
              <Image
                src={d.img}
                width={600}
                height={600}
                layout={'intrinsic'}
              />
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