import { useState, useEffect } from "react"
import { URLBASE } from "./helpers"


function useRecoveryPassword() {

    

    const URL = `${URLBASE}auth/forgot-password`

    const [ email, setEmail ] = useState({email: ""})
    const [ emailModal, setEmailModal ] = useState(false)
    const [ emailUser, setEmailUser ] = useState([])
    const [ emailErrorInput, setEmailErrorInput] = useState(false)


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
        emailErrorInput,
        setEmailErrorInput,
    }
}

export { useRecoveryPassword }