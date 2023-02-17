import Head from 'next/head';
import AntiMatterLogo from './Display/AntiMatterLogo';
import SubHeading from './Typography/SubHeading'

const Banner =()=>{
    return (
        <div className="global_banner">
            <Head>
                <title>AntiMatter | Coming Soon !</title>
            </Head>
            <SubHeading>SOON </SubHeading>
        </div>
    )
}

export default Banner;