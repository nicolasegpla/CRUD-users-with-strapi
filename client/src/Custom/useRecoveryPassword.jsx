import { useState, useEffect } from "react"
import { URLBASE } from "./helpers"


function useRecoveryPassword() {

    

    const URL = `${URLBASE}auth/forgot-password`

    const [ email, setEmail ] = useState({email: ""})
    const [ emailModal, setEmailModal ] = useState(false)
    const [ emailUser, setEmailUser ] = useState([])
    const [ emailErrorInput, setEmailErrorInput] = useState(false)
    const [ validateEmail, setValidateEmail ] = useState(false)


    const arrayEmailUser = []

      useEffect(() => {
        fetch('http://localhost:1337/api/users')
            .then(res => res.json())
            .then(data => data?.map((em) => {
                arrayEmailUser.push(em.email)
                setEmailUser(arrayEmailUser)
            }))
      }, [])

    function recoveryPasswordEmail(e) {

        e.preventDefault()

        
        {
            if(emailUser.includes(email.email)) {
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
            else {
                setEmailErrorInput(true)
            }
        }
    }
        

    function handlerFormForgotPassword({target}) {
        const validador = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/
        const {name, value} = target
        
        {
            validador.test(value) ? setValidateEmail(false) : setValidateEmail(true)
        }
        
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
        emailErrorInput,
        setEmailErrorInput,
        validateEmail,
    }
}

export { useRecoveryPassword }