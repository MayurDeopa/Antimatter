import FunctionalModalForm from "../Misc/FunctionalModalForm";
import OptInput from "../Misc/OptInput";
import PrimaryButton from '../Loaders/PrimaryButton'
import MainContainer from "../Misc/MainContainer";

const Otp =({hook})=>{
    return(
        <FunctionalModalForm
            hook={hook}
            title={'Verify number'}
            maxWidth={'35rem'}
        >
            <p>An OTP will be sent on your given number</p>
        <MainContainer
            maxWidth={'100%'}
        >
            <OptInput
                placeholder={'Phone'}
                type={'number'}
                required
                isValid
            />
            <PrimaryButton
                width={'100px'}
                text={'Send'}
                awaitState={'disabled'}
            />
        </MainContainer>
        <OptInput
            placeholder={'Otp'}
            required
            isValid
            disabled
        />
        <PrimaryButton
            text={'Verify'}
            type={'submit'}
            awaitState={'disabled'}
        />
    </FunctionalModalForm>
    )
}

export default Otp;