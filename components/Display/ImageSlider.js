import styles from '../../styles/misc.module.css'


import Image from 'next/image';

const ImageSlider =({children})=>{
    return (
        <div className={styles.image_slider}>
            <div className={styles.image_container}>
                <Image 
                    src={'https://i.ibb.co/yfzmWt7/1298817-D-6-C08-4685-9-C04-B744-DF55-A64-E-2.jpg'}
                    height={1200}
                    width={1700}
                />
            </div>
            <div className={styles.image_container}>
                <Image 
                    src={'https://i.ibb.co/yfzmWt7/1298817-D-6-C08-4685-9-C04-B744-DF55-A64-E-2.jpg'}
                    height={1200}
                    width={1700}
                />
            </div>
        </div>
    )
}

export default ImageSlider;