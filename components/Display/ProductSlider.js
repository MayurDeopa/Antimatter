
import NewImage from '../NewImage';

const ProductSlider =({images})=>{

    const mainImage = images[0]

    return(

                    <div className={'image_skeleton_aspect'} >
                        <NewImage 
                            height={mainImage.image_dimensions.height}
                            width={mainImage.image_dimensions.width}
                            src={mainImage.url}
                            alt=''
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