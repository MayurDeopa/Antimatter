import PageWrapper from "../components/PageWrapper";
import Head from "next/head";
import Policy from "../components/basic/Policy";
import { installRipple } from "material-gas-ui";

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
            <div style={{backgroundColor:'gray',height:'30rem',width:'30rem'}}
                onMouseDown={({target,nativeEvent})=>{
                    installRipple({
                        clickedElement:target,
                        clickPosition:{
                            top:nativeEvent.offsetY,
                            left:nativeEvent.offsetX
                        },
                        options:{
                            color:'white',
                            duration:500
                        }
                    })
                }}
            >Helo</div>
        </PageWrapper>
    )
}

export default About;