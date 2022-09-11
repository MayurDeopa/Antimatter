import PageWrapper from "../components/PageWrapper";

import { useEffect, useState } from "react";
import { Button ,Progress,Tab} from "material-gas-ui";
import Form from "../components/Misc/Form";


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
            >
                <div >

                </div>
            </div>
            <Tab
                defaultActiveKey={0}
                items={[
                    {
                        label:'Normal',
                        key:1,
                        content:<p style={{color:'white'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                    },
                    {
                        label:'Super',
                        key:2,
                        content:<p style={{color:'white'}}> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                    },
                    {
                        label:'Enterprice',
                        key:3,
                        content:<p style={{color:'white'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>,
                        disabled:true
                    }
                ]}
                styles={{
                    padding:'5px'
                }}
            />
            <Button loading text="Await..."/>
        </PageWrapper>
    )
}

export default About;