import { useState } from "react";
import AwaitButton from "../Loaders/AwaitButton";
import Form from "./Form";
import FormSection from "./FormSection";
import Modal from "./Modal";
import OptInput from "./OptInput";


const Flow =({states})=>{
    const {children} = states
    const [data,setData] = useState()
    const [page,setPage] = useState(0)
    let currentObj = children[page]
    return(
        <Modal>
            <Form
                card={{
                    title:currentObj.title,
                    animated:true
                }}
            >
                {currentObj.items.map((e,i)=>{
                    return(
                        <FormSection key={i}>
                            <p>{e.title}</p>
                            <OptInput
                                states={{
                                    type:'text',
                                    action:(some)=>setData(some)
                                }}
                            />
                        </FormSection>
                    )
                })}
                <AwaitButton
                    states={{
                        text:"Previous",
                        awaitState:page===0?"disabled":"none",
                        action:()=>setPage(prev=>prev-1)
                    }}
                />
                <AwaitButton
                    states={{
                        text:page!==children.length-1?"Next":"Save",
                        loadingText:"Saving",
                        action:page!==children.length-1?()=>setPage(prev=>prev+1):()=>alert(data)
                    }}
                />

            </Form>
        </Modal>
    )
}

export default Flow;