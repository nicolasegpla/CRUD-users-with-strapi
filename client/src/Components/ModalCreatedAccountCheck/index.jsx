import { useContext } from "react"
import { GlobalContext } from "../../global/GlobalContext"
import { CheckBadgeIcon } from "@heroicons/react/24/outline"
import './style.css'

function ModalCreatedAccountCheck() {

    const { continueCheckAccount } = useContext(GlobalContext);

    return(
        <>
            <div className="div-container">
                <figure className="div-container__figure">
                    <CheckBadgeIcon className="icon"/>
                </figure>
                <span className="div-container__span">Created account</span>
                <p className="div-container__p">Your account has been created successfully.</p>
                <button onClick={continueCheckAccount} className="div-container__button">Continue</button>
            </div>
        </>
    )
}

export default ModalCreatedAccountCheck