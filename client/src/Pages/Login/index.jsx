import { useContext } from "react"
import { GlobalContext } from "../../global/GlobalContext"
import Layout from "../../Components/Layout"
import { ModalLogin } from "../../Components/ModalLogin"
import ErrorLogin from "../../Components/ErrorLogin"
import './login.css'



function Login() {
    
    const { doLogin, handlerUserLogin, userLogin, modalLogin,  navigateToCreateAccount, navigateToRecoveryPassword } = useContext(GlobalContext)


    

    return(
        <>
            <Layout>
                <div className="login-container">
                    <h1 className="login-container__h1">PATRON</h1>
                    <div className="login-container-div">
                        <span className="login-container-div__span">Welcome back</span>
                        <p className="login-container-div__p">Please sign into your account</p>
                    </div>
                    <form action="" className="login-container-form">
                        <input 
                            onChange={handlerUserLogin} 
                            className="login-container-form__input--email" 
                            placeholder="Username"
                            value={userLogin.identifier}
                            id="identifier"
                            name="identifier"
                            type="identifier"
                            autoComplete="identifier"
                            required
                        />
                        <input 
                            onChange={handlerUserLogin} 
                            className="login-container-form__input--password" 
                            placeholder="Password"  
                            value={userLogin.password}
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                        />
                        <p onClick={navigateToRecoveryPassword} className="login-container-form__p">Forgot Password?</p>
                        <button onClick={doLogin} className="login-container-form__input--button" type="button">Log in</button>
                    </form>
                    <p className="login-container__p">Dont have an account? <span onClick={ navigateToCreateAccount } className="login-container__p__span">Create acount</span>
                    </p>
                </div>
                <ModalLogin>
                    {modalLogin && <ErrorLogin/>}
                </ModalLogin>
            </Layout>
        </>
    )
}

export default Login