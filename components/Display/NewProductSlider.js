import styles from '../../styles/productslider.module.css'
import NewImage from '../NewImage'

const NewProductSlider = ({images,activeImage,onClick})=>{

    const handleClick=(image,index)=>{
        if(onClick){
            onClick(image,index)
        }
    }

    const getImageClassName = (index)=>{
        if(activeImage===index){
            return `${styles.image_wrapper} ${styles.image_active}`
        }
        return `${styles.image_wrapper}`
    }

    return(
        <div className={styles.wrapper}>
            <div className={styles.container}>
                {images.map((i,index)=>{
                    return(
                        <div key={index} className={getImageClassName(index)} onClick={()=>handleClick(i,index)}>
                            <NewImage src={i.url} height={i.image_dimensions.height} width={i.image_dimensions.width}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default NewProductSlider

// {
//     "id": "ast_8XO3wpkqAOlYAz",
//     "url": "https://cdn.chec.io/merchants/40545/assets/PEUgTwfBTRyVBhuq|3 people traveling, graphic_ Black and White_.png",
//     "description": null,
//     "is_image": true,
//     "filename": "3 people traveling, graphic_ Black and White_.png",
//     "file_size": 31044,
//     "file_extension": "png",
//     "image_dimensions": {
//         "width": 500,
//         "height": 723
//     },
//     "meta": [],
//     "created_at": 1675337309,
//     "updated_at": 1675337313
// }