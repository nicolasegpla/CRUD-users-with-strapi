import { createPortal } from "react-dom";
import './style.css'

function ModalError({ children }) {
    return(
        createPortal(
            <div className="modal-error" style={{display: children ? 'block': 'none'}}>{children}</div>,
            document.getElementById('modalCheckNewAccount')
        )
    )
}

export { ModalError}