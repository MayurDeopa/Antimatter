import styles from '../../styles/Product.module.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Image from 'next/image';

const ProductSlider =({images,onClick})=>{
    return(

                    <div className={'image_skeleton_aspect'} >
                        <Image 
                            
                            onClick={onClick}
                            height={700}
                            width={600}
                            src={images[0].url}
                            className='round pointer'
                            alt='Comparison Destroys Personality tee'
                        />
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