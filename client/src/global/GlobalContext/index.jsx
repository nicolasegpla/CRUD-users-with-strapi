import React from "react";
import { useDoLogin } from "../../Custom/useDoLogin"

const GlobalContext = React.createContext();

// eslint-disable-next-line react/prop-types
function GlobalProvider({children}) {  
    

    const { doLogin, handlerUserLogin, userLogin, modalLogin, setModalLogin} = useDoLogin()

    function closeModalErrorLogin () {
        setModalLogin(false)
    }


    return(
        <GlobalContext.Provider value={{
            doLogin,
            handlerUserLogin,
            userLogin,
            modalLogin,
            setModalLogin,
            closeModalErrorLogin,
        }}>
            {children}
        </GlobalContext.Provider>

    )
    
}

export { GlobalContext, GlobalProvider }