import { useContext } from 'react'
import { GlobalContext } from '../../global/GlobalContext'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'
import "./style.css"


function FormForgottenPassword() {

    const { navigateToLogin, handlerFormForgotPassword, recoveryPasswordEmail, email, validateEmail } = useContext(GlobalContext)

    

    return (
        <>
            <div className="div-container-fp">
                <h1 className="div-container-fp__h1">PATRON</h1>
                <div className="div-container-fp__div-header">
                    <span className="div-container-fp__div-header__span">Password recovery</span>
                    <p className="div-container-fp__div-header__p">Enter your email to which we will send a link to reset your password.</p>
                </div>
                <form className="div-container-fp__form" action="">
                    <input onChange={handlerFormForgotPassword} className="div-container-fp__form__input" name='email' type="email" placeholder="Email" value={email.email} />
                    <span className='div-container-fp__form__span'  style={{display: validateEmail ? 'block': 'none'}}>*Enter a valid email</span>
                    <button onClick={recoveryPasswordEmail} className="div-container-fp__form__button" type='button'>send</button>
                </form>
                <div onClick={navigateToLogin} className="div-container-fp__div-back-login">
                    <ChevronLeftIcon className='div-container-fp__div-back-login__icon' />
                    <p className="div-container-fp__div-back-login__p">Back <span className="div-container__div-back-login__p__span">Login</span></p>
                </div>
            </div>
        </>
    )
}

export default FormForgottenPassword