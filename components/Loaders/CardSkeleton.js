import Panel from "../Panel";
import Skeleton from "./Skeleton";
import Image from "next/image";
import Link from "next/link";
import styles from '../../styles/card.module.css'

const ImageSkeleton =({attributes})=>{
    const {loading,image} = attributes
    if(loading){
        return (
            <Panel attributes={{
                width:"min(20rem,100%)"
            }}>
                <Skeleton
                    attributes={{
                        height:"20rem",
                    }}
                />
                <div className={styles.card_footer}>
                <Skeleton
                    attributes={{
                        height:"1.3rem",
                        width:"8rem"
                    }}
                />
                </div>
            </Panel>
        )
    }
    else{
        return (
            <Link href={'/'}>
                <>
                <Panel attributes={{
                width:"min(20rem,100%)"
                }}>
                <Image
                    width={500}
                    height={600}
                    src={image.assets[0].url}
                />
                    <h3>{image.name}</h3>
                </Panel>
                </>
            </Link>
        )
    }
}

export default ImageSkeleton;