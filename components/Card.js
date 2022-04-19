import styles from '../styles/card.module.css'
import image from '../public/hoodie.jpg'
import Image from 'next/dist/client/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Card = ({details,link})=>{
    const isProduct = details.price 
    return (
        <Link href={link || ''}>
            <div className={styles.card2}>
                <div className={styles.image_wrapper}>
                    <Image src={details.assets[0].url} width={460} height={460} alt=''/>
                </div>
                <div className={styles.card_footer}>
                    {
                        isProduct
                        ?
                        <>
                            <h3>
                                {details.name}
                            </h3>
                            <p>
                                {details.price.formatted_with_code}
                            </p>
                        </>
                        :
                        <h3>
                            {details.name}
                        </h3>
                    }
                </div>
            </div>    
        </Link>
    )
}

export default Card;