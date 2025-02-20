import PageHeader from '@/components/PageHeader'
import PrivacyPolicyContent from './_components/PrivacyPolicyContent'

const PrivacyPolicyPage = () => {
    return (
        <div>
            <PageHeader alt='privacy-policy-header' src='/assets/privacy-policy-header.png' title='개인정보처리방침' />
            <PrivacyPolicyContent />
        </div>
    )
}

export default PrivacyPolicyPage