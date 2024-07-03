import Layout from "../../Components/Layout"
import './login.css'


function Login() {
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
                        <input className="login-container-form__input--email" type='text' placeholder="Email" />
                        <input className="login-container-form__input--password" type='password' placeholder="Password"/>
                        <p className="login-container-form__p">Forgot Password?</p>
                        <input className="login-container-form__input--button" type='button' value='Log in'/>
                    </form>
                    <p className="login-container__p">Don’t have an account? <span className="login-container__p__span">Create acount</span>
                    </p>
                </div>
            </Layout>
        </>
    )
}

export default Login