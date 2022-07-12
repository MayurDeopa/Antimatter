import styles from '../../styles/Product.module.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Image from 'next/image'

const ProductSlider =({images})=>{
    return(
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
                        <Image src={image.url} layout='intrinsic' height={'600'} width={'600'}/>
                    </div>
                )
            })}
        </Carousel>
    )
}

export default ProductSlider;