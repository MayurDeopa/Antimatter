import styles from '../../styles/misc.module.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Image from 'next/image';

const ImageSlider =({children})=>{
    return (
        <Carousel
            autoPlay={true}
            infiniteLoop
            interval={5000}
            showArrows={false}
            showStatus={false}
            showIndicators={false}
            swipeable={true}
            showThumbs={false}
            
        >
            {children}
        </Carousel>
    )
}

export default ImageSlider;