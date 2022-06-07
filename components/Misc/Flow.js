import { useState } from "react";
import { useCallback } from "react";
import { useStore } from "../../lib/drawer/context/StoreContext";


import { emailValidator } from "../../lib/drawer/validators";


import PrimaryButton from "../Loaders/PrimaryButton";
import SecondaryButton from '../Loaders/SecondaryButton'
import MainContainer from "./MainContainer";
import Form from "./Form";
import FormSection from "./FormSection";
import Modal from "./Modal";
import OptInput from "./OptInput";


const Flow =({components,buttonValue,titles,breakpoints,state,action,loadingState})=>{
    const {userState} = useStore()
    const [user,setUser] = userState
    const [data,setData] = useState(components)
    const [page,setPage] = useState(0)
    const [pageState,setPageState] = useState(state)
    const numberOfPages = breakpoints.length 
    const lastStep = numberOfPages
    const isLastStep = lastStep===page 
    
    const pageSubmit =useCallback(()=>{

        setPage(prev=>prev+1)
    },[page,lastStep,isLastStep])

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
                            <OptInput
                                type={s.type}
                                action={setData}
                                array={data}
                                title={s.state}
                                value={data[s.state]}
                                placeholder={s.title}
                                disabled={loadingState}
                            />
                        </FormSection>
                    )
                })}
                <MainContainer
                >
                    <SecondaryButton
                        text={"Previous"}
                        awaitState={loadingState?"disabled":page===0?"disabled":"none"}
                        action={previousPage}
                    />
                    <PrimaryButton
                         text={page!==numberOfPages?'Next':"Submit"}
                         awaitState={loadingState?"loading":'none'}
                         loadingText={"Saving"}
                         action={
                             isLastStep
                             ?
                             ()=>action({
                                id:user._id,
                                details:data
                            })
                            :
                            pageSubmit}
                    />
                </MainContainer>

            </Form>
        </Modal>
    )
}

export default Flow;

{/*
    
*/}