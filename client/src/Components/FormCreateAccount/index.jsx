import { useContext } from 'react'
import { GlobalContext } from '../../global/GlobalContext'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'
import './style.css'

function FormCreateAccount() {

    const { navigateToLogin, countries, handlerRegisterUser, handlerGetDataForm, user } = useContext(GlobalContext)

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
                        onChange={handlerGetDataForm}
                        className='create-account--container__form__input-name' 
                        placeholder="Name"
                        id="username"
                        name="username"
                        type="username"
                        autoComplete="username"
                        value={user.username} 
                        required
                    />
                    {
                        <input
                            onChange={handlerGetDataForm}
                            className='create-account--container__form__input-email' 
                            placeholder="Email" 
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            value={user.email} 
                            required
                        />
                    }
                    <select className='create-account--container__form__input-country'
                    onChange={handlerGetDataForm} 
                    id="country"
                    name="country"
                    type="country"
                    autoComplete="country"
                    required 
                    value={user.country} 
                    >
                        <option defaultValue>Select country</option>
                        {
                            countries.data? countries.data.map((country) => (
                                <option 
                                     
                                    key={country.id}
                                >{country.attributes.Country}</option>
                            )) : null
                        }
                        
                    </select>
                    
                    <input
                        onChange={handlerGetDataForm}
                        className='create-account--container__form__input-password' 
                        placeholder="Password" 
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="password"
                        value={user.password} 
                        required
                    />
                    <button onClick={handlerRegisterUser} className='create-account--container__form__button'>Create Account</button>
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