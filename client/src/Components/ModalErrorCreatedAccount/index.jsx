import { useContext } from 'react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { GlobalContext } from '../../global/GlobalContext'
import './style.css'



function ModalErrorCreatedAccount() {

    const { ErrorTryAgain } = useContext(GlobalContext)
    return (
        <>
            <div className='div-container-error'>
                <figure className='div-container-error__figure'>
                    <ExclamationTriangleIcon className='icon-error'/>
                </figure>
                <span className='div-container-error__span'>Error</span>
                <p className='div-container-error__p'>Error creating account: error description.</p>
                <button className='div-container-error__button' onClick={ErrorTryAgain}>Try again</button>
            </div>
            
        </>
    )
}

export default ModalErrorCreatedAccount