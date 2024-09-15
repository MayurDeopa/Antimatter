
import NewImage from '../NewImage';

import {MdNavigateNext,MdNavigateBefore} from 'react-icons/md'

import styles from '../../styles/productslider.module.css'
import { Button } from 'material-gas-ui';

const ProductSlider =({image,onNext,onPrev})=>{

    const mainImage = image

    return(
        <div className={'image_skeleton_aspect'} >
            <div className={styles.slider_button} style={{left:0}}>
                <Button styles={{backgroundColor:'var(--primary-theme-color)'}} rippleColor='white' text={<MdNavigateBefore size={40}/>} action={onPrev}/>
            </div>
            <div style={{width:'100%'}}>
                <NewImage 
                    height={mainImage.image_dimensions.height}
                    width={mainImage.image_dimensions.width}
                    src={mainImage.url}
                    alt=''
                />
            </div>
            <div className={styles.slider_button} style={{right:0}}>
               <Button styles={{backgroundColor:'var(--primary-theme-color)'}} rippleColor='white' text={ <MdNavigateNext size={40}/>} action={onNext}/>
            </div>
        </div>
    )

}

export default ProductSlider;


/*
<Carousel
            showArrows={true}
            showIndicators={false}
            swipeable={true}
            showStatus={false}
            showThumbs={false}
            emulateTouch
        >
            {images.map((image,i)=>{
                return(
                    <div className={'image_skeleton_aspect'} key={i}>
                        <Image 
                            onClick={onClick}
                            height={800}
                            width={800}
                            src={image.url}
                            className='round'
                            alt='Comparison Destroys Personality tee'
                        />
                    </div>
                )
            })}
        </Carousel>
*/