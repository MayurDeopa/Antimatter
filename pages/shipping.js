import PageWrapper from "../components/PageWrapper";
import Head from "next/head";
import Policy from "../components/basic/Policy";


const Shipping =()=>{
    
    return(
        <PageWrapper>
            <Head>
                <title>Shipping & Delivery Policy</title>
            </Head>
            <Policy title={'Shipping & Delivery Policy'}>
                <p>For International buyers, orders are shipped and delivered through registered international courier companies and/or International speed post only. For domestic buyers, orders are shipped through registered domestic courier companies and /or speed post only. Orders are shipped within 6-8 days or as per the delivery date agreed at the time of order confirmation and delivering of the shipment subject to Courier Company / post office norms. AntiMatter is not liable for any delay in delivery by the courier company / postal authorities and only guarantees to hand over the consignment to the courier company or postal authorities within 6-8 days from the date of the order and payment or as per the delivery date agreed at the time of order confirmation. Delivery of all orders will be to the address provided by the buyer. Delivery of our services will be confirmed on your mail ID as specified during registration. For any issues in utilizing our services you may contact our helpdesk on or antimatterclothing13@gmail.com</p>
            </Policy>
        </PageWrapper>
    )
}

export default Shipping;