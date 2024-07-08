import { createPortal } from "react-dom"
import './style.css'

function ModalSendEmail({children}) {
    return(
            createPortal(
                <div className="modal-email" style={{display: children ? 'block': 'none'}}>{children}</div>,
                document.getElementById('modalSendEmailForgotPassword')
            )
    )
}

export { ModalSendEmail }