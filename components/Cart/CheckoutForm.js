import Form from "../Misc/Form"
import styles from '../../styles/checkout.module.css'
import { Button ,Container} from "material-gas-ui";
import Select from "../Misc/Select";
import OptInput from "../Misc/OptInput";
import {FiLock} from 'react-icons/fi'
import PrimarySpinner from "../Loaders/PrimarySpinner";

const CheckoutForm = ({handleCheckout,data,handleInput,states,countriesData,checkoutToken,isPaying})=>{
    return(
            <Form
            maxWidth={'30rem'}
            customClasses={`${styles.small_container} ${styles.no_bg}`}
            width={'100%'}
            direction={'column'}
            action={handleCheckout}
            
        >
            <Container
                        className={styles.small_container}
                    
                    >
                        <h3 style={{marginBottom:'10px'}}>Personal Details</h3>
                        <Container
                        className={styles.info_wrapper}
                    >
                        <Container
                            align={'center'}     
                        >
                            <OptInput
                                
                               placeholder={"First name"}   
                               autoFocus
                                action={(e)=>handleInput('firstname',e.target.value)}
                                required={true}
                                title={'email'}
                                value={data.firstname}
                                isValid
                                type={'text'}
                            />
                        </Container>
                        <Container
                        >

                            <OptInput
                                
                                placeholder={"Last name"}                               
                                action={(e)=>handleInput('lastname',e.target.value)}
                                required={true}
                                title={'Last name'}
                                value={data.lastname}
                                isValid
                            />
                        </Container>
                    </Container>
                    <Container

                        >
                            <OptInput
                                
                                placeholder={"Email"}
                                action={(e)=>handleInput('email',e.target.value)}
                                required={true}
                                title={'name'}
                                value={data.email}
                                isValid
                                type={'email'}
                            />
                        </Container>
                    </Container>
                    
                    <Container
                        className={styles.small_container}
                    >
                        <h3 style={{marginBottom:'10px'}}>Shipping Address</h3>
                        <Container
                        className={styles.info_wrapper}
                    >
                        <Container
                        >
                            <OptInput
                                
                                placeholder={"Shipping Name"}
                                action={(e)=>handleInput('name',e.target.value)}
                                required={true}
                                title={'name'}
                                value={data.name}
                                isValid
                            />
                        </Container>
                    </Container>
                    <Container
                    >
                        <OptInput
                            
                            maxWidth={'992px'}
                            placeholder={"Street address"}
                            type={'textarea'}                            
                            action={(e)=>handleInput('street',e.target.value)}
                            required={true}
                            title={'street'}
                            value={data.street}
                            isValid
                        />
                    </Container>
                    <Container
                        >
                            <OptInput
                                
                                placeholder={"City"}
                                action={(e)=>handleInput('town_city',e.target.value)}
                                required={true}
                                title={'town_city'}
                                value={data.town_city}
                                isValid
                            />
                            <OptInput
                                
                                placeholder={"Pincode"}
                                action={(e)=>handleInput('pincode',e.target.value)}
                                required={true}
                                title={'pincode'}
                                value={data.pincode}
                                type={'number'}
                                isValid
                            />
                        </Container>
                    <Container
                        className={styles.info_wrapper}       
                    >
                        <Container
                        >
                            <Select
                                
                                placeholder={"State"}
                                action={(e)=>handleInput('state',e.target.value)}
                                required={true}
                                title={'state'}
                                value={data.state}
                                isValid
                                options={states}
                                
                            />    
                        </Container>
                            <Container
                            >
                                <Select
                                    
                                    action={(e)=>handleInput('country',e.target.value)}
                                    required
                                    placeholder={'Country'}
                                    title={'country'}
                                    value={data.country}
                                    isValid
                                    options={countriesData}
                                />    
                            </Container>    
                            
                        </Container>
                    </Container>
                    
                    <Container>
                        <Button
                            text={!isPaying && `Pay ${checkoutToken.live.total_with_tax.formatted_with_symbol}`}
                            styles={{width:'100%'}}
                            rippleTimeout={600}
                            rippleColor={'white'}
                            type='submit'
                            icon={isPaying?<PrimarySpinner/>:<FiLock/>}
                            loading={isPaying}
                        />
                    </Container>
        </Form>
    )
}

export default CheckoutForm;