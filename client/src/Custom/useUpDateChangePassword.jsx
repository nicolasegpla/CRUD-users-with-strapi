import { useState } from "react"
import { URLBASE } from "./helpers"
import { useLocalStorage } from "./useLocalStorage"



function useUpDateChangePassword() {
    const initialValueChangePassword = {currentPassword: "", password: "", passwordConfirmation: ""}
    const {jwt } = useLocalStorage()
    
    console.log(jwt)

    const [ upDateChangePassword, setUpDateChangePassword ] = useState(initialValueChangePassword)
    const [ upDatePassword, setUpDatePassword ] = useState(false)
    const [ changePassword, setChangePassword ] = useState(false)
    const [ changePasswordError, setChangePasswordError ] = useState(false)
    const [ changePasswordErrorServer, setChangePasswordErrorServer ] = useState(false)

    function closeChangePasswordConfirm() {
        setChangePassword(false)
    }

    function closeChangePasswordTryAgain() {
        setChangePasswordError(false)
    }

    
    function changePasswordUpDate() {
        
        
            fetch(`${URLBASE}auth/change-password`, {
                method: 'POST',
                body: JSON.stringify(upDateChangePassword),
                headers: {
                    Authorization: `Bearer ${jwt}`,
                    "Content-Type": "application/json",
                },
            })
                .then(res => res.json())
                .then(data => {
                    if(!data.error){
                        console.log(data)
                        setUpDatePassword(false)
                        setChangePassword(true)
                    }else {
                        setChangePasswordError(true)
                    }
                    
                })
                .catch(error =>{ 
                    console.log(error)
                    setChangePasswordErrorServer(true)
                })
        
        


            setUpDateChangePassword({currentPassword: "", password: "", passwordConfirmation: ""})
    }


    function handlerChangePassword({target}) {
        const {name, value} = target
        setUpDateChangePassword({
            ...upDateChangePassword,
            [name]: value
        })
        
    }
    return {
        upDateChangePassword,
        handlerChangePassword,
        changePasswordUpDate,
        upDatePassword,
        setUpDatePassword,
        changePassword,
        closeChangePasswordConfirm,
        changePasswordError,
        closeChangePasswordTryAgain,
        changePasswordErrorServer,
        setChangePasswordErrorServer,
    }
} 

export {useUpDateChangePassword}