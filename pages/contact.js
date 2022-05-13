import ModalSpinner from '../components/Loaders/ModalSpinner'
import PrimarySpinner from '../components/Loaders/PrimarySpinner';
import EmptyState from '../components/Misc/EmptyState';
import PageWrapper from '../components/PageWrapper'

const Contact =()=>{
    return(
        <PageWrapper>
            <EmptyState>
                <PrimarySpinner states={{
                    size:'l'
                }}/>
            </EmptyState>
        </PageWrapper>
    )
}

export default Contact;