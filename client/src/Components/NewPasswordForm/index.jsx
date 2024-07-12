/* eslint-disable react/prop-types */
import { ChevronLeftIcon } from '@heroicons/react/24/outline'
import { EyeIcon } from '@heroicons/react/24/outline'
import { EyeSlashIcon } from '@heroicons/react/24/outline'
import { ExclamationCircleIcon } from '@heroicons/react/24/outline'
import './newPasswordForm.css'


function NewPasswordform({h1, spanh, ph, buttont, pl, spanl, statePassword, statePasswordConfirm, changeTypePassword, changeTypePasswordConfirm, handlerNewP, handlerNewPc, validatorNewPassword, validatorConfirm, navigateToLogin, value, valueConfirm }) {

   
    return(
        <>
            <div className='new-password-container'>
                <h1 className='new-password-container__h1'>{h1}</h1>
                <div className='new-password-container__div-head'>
                    <span className='new-password-container__div-head__span'>{spanh}</span>
                    <p className='new-password-container__div-head__p'>{ph}</p>
                </div>
                <form className='new-password-container__form'>
                    <label className='new-password-container__form__label' htmlFor="\">
                        <button type='button' onClick={changeTypePassword} className='new-password-container__form__label__button'>
                            {
                                statePassword ? <EyeSlashIcon className='new-password-container__form__label__button__icon' /> : <EyeIcon className='new-password-container__form__label__button__icon' />
                            }
                        </button>
                        <input
                            onChange={handlerNewP} 
                            className='new-password-container__form__label__input-new' 
                            type={`${statePassword ? 'text' : 'password'}`} 
                            placeholder='New password' 
                            name="password" 
                            id="password"
                            value={value}
                            required
                        />
                    </label>
                    <label className='new-password-container__form__label' htmlFor="\">
                        <button type='button' onClick={changeTypePasswordConfirm} className='new-password-container__form__label__button'>
                            {
                                statePasswordConfirm ? <EyeSlashIcon className='new-password-container__form__label__button__icon' /> : <EyeIcon className='new-password-container__form__label__button__icon' />
                            }
                        </button>
                        
                        <input 
                            onChange={handlerNewPc}
                            className='new-password-container__form__label__input-new-confirm' 
                            type={`${statePasswordConfirm ? 'text' : 'password'}`} 
                            placeholder='Confirm new password' 
                            name="passwordConfirmation" 
                            id="passwordConfirmation" 
                            value={valueConfirm}
                            required
                        />
                    </label>
                    {
                        validatorConfirm ? <div className='container-validator'><ExclamationCircleIcon className='container-validator__icon' /> <span className='container-validator__span'>Please verify your password.</span> </div>  : null
                    }
                    <button onClick={validatorNewPassword} className='new-password-container__form__button' type='button'>{buttont}</button>
                </form>
                <div onClick={navigateToLogin} className='new-password-container__div-link'>
                    <ChevronLeftIcon className='new-password-container__div-link__icon' />
                    <p className='new-password-container__div-link__p'>{pl} <span className='new-password-container__div-link__p__span'>{spanl}</span></p>
                </div>
            </div>
        </>
    )
}

export default NewPasswordform