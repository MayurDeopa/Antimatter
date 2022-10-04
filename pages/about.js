import PageWrapper from "../components/PageWrapper";
import Head from "next/head";
import Policy from "../components/basic/Policy";

const About =()=>{
    
    return(
        <PageWrapper>
            <Head>
                <title>About us</title>
            </Head>
            <Policy title={'About us'}>
                <p>Create good; We are driven by this mantra

                We believe we are part of a shared humanity, and we are grateful to have these moments right in front of us to connect with those we love, to remember something meaningful inside ourselves, to appreciate nature in its stunning beauty.

                Good moments. Good memories. Good products. So you can create a good life.</p>
            </Policy>
        </PageWrapper>
    )
}

export default About;