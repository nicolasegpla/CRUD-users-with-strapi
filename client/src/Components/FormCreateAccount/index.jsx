import { ChevronLeftIcon } from '@heroicons/react/24/outline'
import './style.css'
import { useContext } from 'react'
import { GlobalContext } from '../../global/GlobalContext'

function FormCreateAccount() {

    const { navigateToLogin } = useContext(GlobalContext)

    return(
        <>
            <div className='create-account--container'>
                <h1 className='create-account--container__h1'>PATRON</h1>
                <div className='create-account--container__div'>
                    <span className='create-account--container__div__span'>Create an account</span>
                    <p className='create-account--container__div__p'>Please fill the form to continue</p>
                </div>
                <form className='create-account--container__form' action="">
                    <input
                        className='create-account--container__form__input-name' 
                        type="text" 
                        placeholder="Name" 
                    />
                    <input
                        className='create-account--container__form__input-email' 
                        type="text" 
                        placeholder="Email" 
                    />
                    <input
                        className='create-account--container__form__input-phone' 
                        type="text" 
                        placeholder="Phone" 
                    />
                    <input
                        className='create-account--container__form__input-country' 
                        type="text" 
                        placeholder="Country" 
                    />
                    <input
                        className='create-account--container__form__input-password' 
                        type="text" 
                        placeholder="Password" 
                    />
                    <button className='create-account--container__form__button'>Create Account</button>
                </form>
                <div onClick={navigateToLogin} className='create-account--container__div-link'>
                    <ChevronLeftIcon className='create-account--container__div-link__icon' />
                    <p className='create-account--container__div-link__p'>Back</p>
                    <span className='create-account--container__div-link__span'>Login</span>
                    
                </div>
            </div>
        </>
    )
}

export default FormCreateAccount