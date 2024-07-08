import { useState } from "react"
import { URLBASE } from "./helpers"


function useRecoveryPassword() {

    const URL = `${URLBASE}auth/forgot-password`

    const [email, setEmail] = useState({email: ""})
    const [emailModal, setEmailModal] = useState(false)

    function recoveryPasswordEmail(e) {

        e.preventDefault()

        fetch(URL, {
            method: 'POST',
            body: JSON.stringify(email),
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then(res => res.json())
        .then(data => {
            setEmailModal(true)
            console.log('la respuesta es:', data)
        })
        .catch(error => {
            console.log('An error occurred:', error.response)
        
        })
        
        setEmail({
            email: ""
        })
        
       
    }

    function handlerFormForgotPassword({target}) {
        const {name, value} = target
        
        setEmail({
            ...email,
            [name]: value
        })
    }
    

    return {
        handlerFormForgotPassword,
        email,
        recoveryPasswordEmail,
        emailModal,
        setEmailModal,
    }
}

export { useRecoveryPassword }