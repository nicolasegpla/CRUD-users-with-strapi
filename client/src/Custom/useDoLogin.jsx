import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { URLBASE } from "./helpers"
import { useLocalStorage } from "./useLocalStorage"


function useDoLogin() {

    const { saveUserSesion } = useLocalStorage()
    

    const initialValue = ({identifier: "", password: ""})
    const navigate = useNavigate()

    const [ userLogin, setUserLogin ] = useState(initialValue);
    const [ modalLogin, setModalLogin ] = useState(false)

    

    function doLogin(e) {
        e.preventDefault()

        fetch(`${URLBASE}auth/local`, {
            method: 'POST',
            body: JSON.stringify(userLogin),
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.jwt) {
                saveUserSesion(data);
                navigate("/dashboard")
            }else {
                setModalLogin(true)
                
            }
        })
        .catch((error) => {console.error(error)})
        
        setUserLogin({
            identifier: "",
            password: "",
        })

    }

    

    function handlerUserLogin({ target }) {
        const {name, value } = target

        setUserLogin({
            ...userLogin,
            [name]: value
        })
    }

   


    return {
        doLogin,
        handlerUserLogin,
        userLogin,
        modalLogin,
        setModalLogin,
    }
}

export  { useDoLogin }