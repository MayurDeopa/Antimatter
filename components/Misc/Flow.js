import { useState } from "react";
import { useCallback } from "react";
import AwaitButton from "../Loaders/AwaitButton";
import ButtonGroup from "./ButtonGroup";
import Form from "./Form";
import FormSection from "./FormSection";
import Modal from "./Modal";
import OptInput from "./OptInput";


const Flow =({components,buttonValue,titles,breakpoints})=>{
    const [data,setData] = useState(components)
    const [page,setPage] = useState(0)
    const numberOfPages = breakpoints.length 
    const lastStep = numberOfPages
    const isLastStep = lastStep===page 
    
    const pageSubmit =useCallback(()=>{
        setPage(prev=>prev+1)
    },[page,lastStep,isLastStep])

    const [loading,setLoading] = useState(false)
    const previousPage =useCallback((e)=>{
        e.preventDefault()
        setPage(prev=>prev-1)
    },[page,isLastStep])

    return(
        <Modal>
            <Form
                title={titles[page]}
                animated={true}
            >
                {Object.keys(components).slice(breakpoints[page-1],breakpoints[page]).map((key,i)=>{
                    return (
                        <FormSection key={i}>
                    <p>{key}</p>
                    <OptInput
                        type={'text'}
                        action={setData}
                        array={data}
                        title={key}
                        value={data[key]}
                    />
                </FormSection>
                    )
                })}
                <ButtonGroup>
                    <AwaitButton
                        text={"Previous"}
                        secondary={true}
                        awaitState={page===0?"disabled":"none"}
                        action={previousPage}
                    />
                    <AwaitButton
                         text={page!==numberOfPages?'Next':"Submit"}
                         awaitState={loading?"loading":'none'}
                         loadingText={"Saving"}
                         action={isLastStep?()=>setLoading(true):pageSubmit}
                    />
                </ButtonGroup>

            </Form>
        </Modal>
    )
}

export default Flow;

{/*
    
*/}