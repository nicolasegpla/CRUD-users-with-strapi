import { CheckBadgeIcon } from "@heroicons/react/24/outline"
import './style.css'


function ModalEmailSendForgotPassword({label, backgroundColor, fnButton}) {

    

    return(
        <>
            <div style={backgroundColor && { backgroundColor }} className='div-container-email'>
                <figure className='div-container-email__figure'>
                    <CheckBadgeIcon className='icon-email'/>
                </figure>
                <span className='div-container-email__span'>E-mail sent</span>
                <p className='div-container-email__p'>Check your email and follow the instructions to recover your password.</p>
                <button className='div-container-email__button' onClick={fnButton} >{label}</button>
            </div>
        </>
    )
}

export default ModalEmailSendForgotPassword