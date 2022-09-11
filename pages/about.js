import PageWrapper from "../components/PageWrapper";

import { useEffect, useState } from "react";
import { Button } from "material-gas-ui";


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
            <Button/>
        </PageWrapper>
    )
}

export default About;