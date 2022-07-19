import MainContainer from "../components/Misc/MainContainer";
import PageWrapper from "../components/PageWrapper";

import { useEffect,useCallback, useState } from "react";


const About =()=>{
    const [shrink,setShrink] = useState(false)
    useEffect(() => {
        const handleScroll = event => {
            let top = window.scrollY
            if(top>250){
                setShrink(true)
                console.log('shreink')
            }
            else{
                setShrink(false)
            }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    return(
        <PageWrapper>
            <div
                className={'parallax_container'}
            >
                <div 
                    className={`parallax ${shrink && 'shrink'}`} >

                </div>
            </div>
        </PageWrapper>
    )
}

export default About;