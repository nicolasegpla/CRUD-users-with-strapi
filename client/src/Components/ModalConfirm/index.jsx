import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import './modalconfirm.css'

// eslint-disable-next-line react/prop-types
function ModalConfirm({title, text, fn, label, optionText}) {
    return(
        <>
            <div className='modalConfirm-div'> 
                <ExclamationTriangleIcon className='icon-modalConfirm'/>
                <span className='modalConfirm-div__span'>{title}</span>
                <p className='modalConfirm-div__p'>
                    {text}
                    <span className='modalConfirm-div__p__span'>{optionText}</span>
                </p>
                <button onClick={fn} className='modalConfirm-div__button'>{label}</button>
            </div>
        </>
    )
}

export default ModalConfirm