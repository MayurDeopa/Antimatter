import styles from '../styles/card.module.css'
import image from '../public/hoodie.jpg'
import Image from 'next/dist/client/image';
import Link from 'next/link';
import MainContainer from '../components/Misc/MainContainer'

const Card = ({details,link})=>{
    const isProduct = details.price 
    return (
        <Link href={link || ''}>
            <div className={styles.card2}>
                <div className={styles.image_wrapper}>
                    <Image src={details.assets[0].url} width={460} height={460} alt='' className='round'/>
                </div>
                <div className={styles.card_footer}>
                    {
                        isProduct
                        ?
                        <MainContainer
                            justify={'space-between'}
                        >
                            <h3>
                                {details.name}
                            </h3>
                            <p
                                style={{fontWeight:'bold'}}
                            >
                                {details.price.formatted_with_symbol}
                            </p>
                        </MainContainer>
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