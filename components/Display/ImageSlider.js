import styles from '../../styles/misc.module.css'


import Image from 'next/image';

const ImageSlider =({children})=>{
    return (
        <div className={styles.image_slider}>
            <div className={styles.image_container}>
                <Image 
                    src={'https://i.ibb.co/yfzmWt7/1298817-D-6-C08-4685-9-C04-B744-DF55-A64-E-2.jpg'}
                    height={600}
                    width={1200}
                />
            </div>
        </div>
    )
}

export default ImageSlider;