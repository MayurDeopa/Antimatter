import { useState } from "react";
import { useCallback } from "react";


import { emailValidator } from "../../lib/drawer/validators";


import PrimaryButton from "../Loaders/PrimaryButton";
import SecondaryButton from '../Loaders/SecondaryButton'
import ButtonGroup from "./ButtonGroup";
import Form from "./Form";
import FormSection from "./FormSection";
import Modal from "./Modal";
import OptInput from "./OptInput";


const Flow =({components,buttonValue,titles,breakpoints,state})=>{
    const [data,setData] = useState(components)
    const [page,setPage] = useState(0)
    const [pageState,setPageState] = useState(state)
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
                {pageState.slice(breakpoints[page-1],breakpoints[page]).map((s,i)=>{
                    return (
                        <FormSection key={i}>
                            <p>{s.title}</p>
                            <OptInput
                                type={s.type}
                                action={setData}
                                array={data}
                                title={s.state}
                                value={data[s.state]}
                                disabled={loading}
                            />
                        </FormSection>
                    )
                })}
                <ButtonGroup
                >
                    <SecondaryButton
                        text={"Previous"}
                        awaitState={loading?"disabled":page===0?"disabled":"none"}
                        action={previousPage}
                    />
                    <PrimaryButton
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