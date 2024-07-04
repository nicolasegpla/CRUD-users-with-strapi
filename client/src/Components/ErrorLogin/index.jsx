import { useContext } from 'react'
import  erroapp  from '../../assets/errorapp.svg'
import { GlobalContext } from '../../global/GlobalContext'
import './errorlogin.css'


function ErrorLogin() {

    const { closeModalErrorLogin } = useContext(GlobalContext)

    return (
        <>
            <div className='errorLogin--container'> 
                <figure className='errorLogin--container__figure'>
                    <img className='errorLogin--container__figure__img' src={erroapp} alt="" />
                </figure>
                <span className='errorLogin--container__span'>Error</span>
                <p className='errorLogin--container__p'>The username or password are incorrect</p>
                <button onClick={closeModalErrorLogin} className='errorLogin--container__button'>Try again</button>
            </div>
        </>
    )
}

export default ErrorLogin