import PageWrapper from "../components/PageWrapper";
import Head from "next/head";
import Policy from "../components/basic/Policy";

import styles from '../styles/policy.module.css'

const Refund =()=>{
    
    return(
        <PageWrapper>
            <Head>
                <title>Cancellation & Refund Policy</title>
            </Head>
            <Policy title={'Cancellation & Refund Policy'}>
                <p>
                AntiMatter believes in helping its customers as far as possible, and has therefore a liberal cancellation policy. Under this policy:
                </p>

                <ul className={styles.list}>
                    <li>
                    Cancellations will be considered only if the request is made immediately after placing the order. However, the cancellation request may not be entertained if the orders have been communicated to the vendors/merchants and they have initiated the process of shipping them.
                    </li>
                    <li>
                    Mayur Anand Singh Kamla does not accept cancellation requests for perishable items like flowers, eatables etc. However, refund/replacement can be made if the customer establishes that the quality of product delivered is not good.
                    </li><li>
                    In case of receipt of damaged or defective items please report the same to our Customer Service team. The request will, however, be entertained once the merchant has checked and determined the same at his own end. This should be reported within 7 days of receipt of the products.
                    </li><li>
                    In case you feel that the product received is not as shown on the site or as per your expectations, you must bring it to the notice of our customer service within 7 days of receiving the product. The Customer Service Team after looking into your complaint will take an appropriate decision.
                    </li><li>
                    In case of complaints regarding products that come with a warranty from manufacturers, please refer the issue to them.
                    </li><li>
                    In case of any Refunds approved by the Mayur Anand Singh Kamla, it will take 6-8 days for the refund to be processed to the end customer.
                    </li>
                </ul>
            </Policy>
        </PageWrapper>
    )
}

export default Refund;