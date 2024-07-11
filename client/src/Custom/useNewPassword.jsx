import { useEffect, useState } from "react"
import { URLBASE } from "./helpers"

function useNewPassword() {

    const url = `${URLBASE}auth/reset-password`;
    

    const initialStateNewPassword = {code: '', password: '', passwordConfirmation: ''}

    const [ seePassword, setSeePassword ] = useState(false)
    const [ seePasswordConfirm, setSeePasswordConfirm ] = useState(false)
    const [ newPassword, setNewPassword ] = useState(initialStateNewPassword)
    const [ validatorConfirm, setValidatorConfirm ] = useState(false)

    function handlerSeePassword() {
        setSeePassword(state => !state)
    }
    function handlerSeePasswordConfirm() {
        setSeePasswordConfirm(state => !state)
    }

    function handlerNewPassword({target}) {
        const {name, value} = target;

        setNewPassword({
            ...newPassword,
            [name]: value
        })
    }
    function handlerNewPasswordConfirm({target}) {
        
        const {name, value} = target

        setNewPassword({
            ...newPassword,
            [name]: value
        })
        
    }
    useEffect(() => {
        const valores = window.location.search;
        console.log(valores)
        const urlParams = new URLSearchParams(valores);
        let code = urlParams.get('code');

        console.log(code)

        setNewPassword({
            ...newPassword,
            code: code
        })
        

    }, [])

    function validatorNewPassword() {

        if(newPassword.password === newPassword.passwordConfirmation) {

            fetch(url, {
                method: 'POST',
                body: JSON.stringify(newPassword),
                headers: {
                     "Content-Type": "application/json"
                }
            })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.log(`este es el error ${error}`))
        }else {
            console.log('la clave no coinside')
            setValidatorConfirm(true)
        }
    }

    
    

    return{
        seePassword,
        setSeePassword,
        handlerSeePassword,
        seePasswordConfirm,
        setSeePasswordConfirm,
        handlerSeePasswordConfirm,
        handlerNewPassword,
        handlerNewPasswordConfirm,
        validatorNewPassword,
        validatorConfirm,
    }
}

export {useNewPassword}