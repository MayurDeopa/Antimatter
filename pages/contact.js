import ModalSpinner from '../components/Loaders/ModalSpinner'
import PrimarySpinner from '../components/Loaders/PrimarySpinner';
import EmptyState from '../components/Misc/EmptyState';
import PageWrapper from '../components/PageWrapper'

const Contact =()=>{
    return(
        <PageWrapper>
            <EmptyState>
                <PrimarySpinner
                    size={'m'}
                />
            </EmptyState>
        </PageWrapper>
    )
}

export default Contact;