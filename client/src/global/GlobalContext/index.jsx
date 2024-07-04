import React from "react";
import { useDoLogin } from "../../Custom/useDoLogin"

const GlobalContext = React.createContext();

// eslint-disable-next-line react/prop-types
function GlobalProvider({children}) {  
    

    const { doLogin, handlerUserLogin, userLogin, modalLogin, setModalLogin, navigate} = useDoLogin()

    function closeModalErrorLogin () {
        setModalLogin(false)
    }

    function navigateToCreateAccount() {
        navigate('/create-an-account')
    }

    function navigateToLogin() {
        navigate('/login')
    }




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
        }}>
            {children}
        </GlobalContext.Provider>

    )
    
}

export { GlobalContext, GlobalProvider }