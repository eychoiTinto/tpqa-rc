import PageHeader from '@/components/PageHeader'
import KADTest from './_compnents/KADTest'
import MainInfo from './_compnents/MainInfo'
import MajorPerfomance from './_compnents/MajorPerfomance'

const KADHPI = () => {
    return (
        <div>
            <PageHeader alt='kad-hpi-header' src='/assets/kad-hpi-header.png' title='KAD.HPI' />
            <KADTest />
            <div className='container pb-[120px] md:pb-44'>
                <MainInfo />
                <div className='mt-16 px-5 md:px-0'>
                    <MajorPerfomance />
                </div>
            </div>
        </div>
    )
}

export default KADHPI