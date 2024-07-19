import { XMarkIcon } from '@heroicons/react/24/outline'
import './updatepassword.css'
import { useContext } from 'react'
import { GlobalContext } from '../../global/GlobalContext'


function UpDatePasswordCom() {

    const { setUpDatePassword, upDateChangePassword, handlerChangePassword, changePasswordUpDate } = useContext(GlobalContext)

    function closeModal() {
        setUpDatePassword(false)
    }

    return(
        <>
            <div className='create-account--container'>
                <h1 className='create-account--container__h1'>PATRON</h1>
                <div className='create-account--container__div'>
                    <span className='create-account--container__div__span'>Change Password</span>
                    <p className='create-account--container__div__p'>Please fill the form to continue</p>
                </div>
                <form className='create-account--container__form' action="">
                    <input
                        onChange={handlerChangePassword}
                        value={upDateChangePassword.currentPassword}
                        className='create-account--container__form__input-name' 
                        placeholder="Current password"
                        id="currentPassword"
                        name="currentPassword"
                        type="currentPassword"
                        autoComplete="currentPassword"
                        required
                    />
                    
                    <input
                        onChange={handlerChangePassword}
                        value={upDateChangePassword.password}
                        className='create-account--container__form__input-email' 
                        placeholder="New password" 
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="password" 
                        required
                    />
                    
                    <input
                        onChange={handlerChangePassword}
                        value={upDateChangePassword.passwordConfirmation}
                        className='create-account--container__form__input-password' 
                        placeholder="New password confirmation" 
                        id="passwordConfirmation"
                        name="passwordConfirmation"
                        type="passwordConfirmation"
                        autoComplete="passwordConfirmation" 
                        required
                    />
                    <button type='button' onClick={changePasswordUpDate} className='create-account--container__form__button'>Change Password</button>
                </form>
                <div onClick={closeModal} className='div-icon'>
                    <XMarkIcon className='div-icon__icon' />
                </div>
            </div>
        </>
    )
}

export default UpDatePasswordCom