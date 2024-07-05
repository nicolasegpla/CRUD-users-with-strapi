import { useState } from "react"
import { URLBASE } from "./helpers"

function usePostRegisterUser() {

    const URL = `${URLBASE}auth/local/register`

    const initialUser = {username: "", email: "", country: "", password: ""}
    const [user, setUser] = useState(initialUser)
    const [stateAccount, setStateAccount] = useState(false)
    const [stateError, setStateError] = useState(false)

    
    function handlerRegisterUser(e) {
        e.preventDefault()

        if(user.username && user.email && user.country && user.password) {
            fetch(URL, {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((res) => res.json())
            .then((res) => {
                if(res.user.confirmed) {
                    setStateAccount(true);
                }
            });
        }else {
            setStateError(true);
        }

        console.log(user)

        setUser({
            username: "", 
            email: "", 
            country: "", 
            password: ""
        })

    }

    function handlerGetDataForm({ target }) {
        const { name, value } = target;
        setUser({
            ...user,
            [name]: value
            
        })
    }
    return {
        handlerRegisterUser,
        handlerGetDataForm,
        user,
        setStateAccount,
        stateAccount,
        stateError,
        setStateError,
    }
}

export { usePostRegisterUser }