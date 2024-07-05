import { useState } from "react"
import { URLBASE } from "./helpers"
import { emailValidation } from "./helpers"
import { useNavigate } from "react-router-dom"

function usePostRegisterUser() {

    const URL = `${URLBASE}auth/local/register`
    const navigate = useNavigate()

    const initialUser = {username: "", email: "", country: "", password: ""}
    const [user, setUser] = useState(initialUser)

    
    console.log(user.email == emailValidation)

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
            .then((res) => (console.log("Success", res.user.confirmed), navigate("/login")));
        }else {
            console.error('Error to create an a count')
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
    }
}

export { usePostRegisterUser }