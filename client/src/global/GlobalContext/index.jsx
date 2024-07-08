import React, { useState, useEffect } from "react";
import { useDoLogin } from "../../Custom/useDoLogin"
import { usePostRegisterUser } from "../../Custom/usePostRegisterUser";
import { useRecoveryPassword } from "../../Custom/useRecoveryPassword";


const GlobalContext = React.createContext();

// eslint-disable-next-line react/prop-types
function GlobalProvider({children}) {  

    const [countries, setCountries] = useState([])
    

    const { doLogin, handlerUserLogin, userLogin, modalLogin, setModalLogin, navigate} = useDoLogin()
    const { handlerRegisterUser, handlerGetDataForm, user, setStateAccount, stateAccount, stateError, setStateError } = usePostRegisterUser()
    const { handlerFormForgotPassword, email, recoveryPasswordEmail, emailModal, setEmailModal, } = useRecoveryPassword()

    function closeModalErrorLogin () {
        setModalLogin(false)
    }

    function navigateToCreateAccount() {
        navigate('/create-an-account')
    }

    function navigateToLogin() {
        navigate('/login')
    }

    function navigateToRecoveryPassword() {
        navigate('/password-recovery')
    }

    function continueCheckAccount() {
        setStateAccount(false)
        navigate('/login')
    }

    function ErrorTryAgain() {
        setStateError(false)
        navigate('/create-an-account')
    }
    function emailSendContinue() {
        setEmailModal(false)
        navigate('/login')
    }

    useEffect(() => {
        fetch('http://localhost:1337/api/countries')
          .then((res) => res.json())
          .then((data) => {setCountries(data)})
      },[]) 




    return(
        <GlobalContext.Provider value={{
            doLogin,
            handlerUserLogin,
            userLogin,
            modalLogin,
            setModalLogin,
            closeModalErrorLogin,
            navigateToCreateAccount,
            navigateToLogin,
            countries,
            handlerRegisterUser,
            handlerGetDataForm,
            user,
            stateAccount,
            continueCheckAccount,
            stateError,
            ErrorTryAgain,
            navigateToRecoveryPassword,
            handlerFormForgotPassword,
            email,
            recoveryPasswordEmail,
            emailSendContinue,
            emailModal,
        }}>
            {children}
        </GlobalContext.Provider>

    )
    
}

export { GlobalContext, GlobalProvider }