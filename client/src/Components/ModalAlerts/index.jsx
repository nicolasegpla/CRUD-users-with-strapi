import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import './modalalerts.css'

// eslint-disable-next-line react/prop-types
function ModalAlerts({title, text, fn, label, optionText}) {
    return(
        <>
            <div className='modalAlerts-div'> 
                <ExclamationTriangleIcon className='icon-modalAlerts'/>
                <span className='modalAlerts-div__span'>{title}</span>
                <p className='modalAlerts-div__p'>
                    {text}
                    <span className='modalAlerts-div__p__span'>{optionText}</span>
                </p>
                <button onClick={fn} className='modalAlerts-div__button'>{label}</button>
            </div>
        </>
    )
}

export default ModalAlerts