import { createPortal } from "react-dom"
import './modalAlertsErrorEmail.css'

function ModalAlertsErrorEmail({children}) {
    return(
        createPortal(
            <div className="modalAlertsErrorEmail" style={{display: children ? 'block': 'none'}}>{children}</div>,
            document.getElementById('modalAlertsErrorEmail')
        )
    )
}

export {ModalAlertsErrorEmail}