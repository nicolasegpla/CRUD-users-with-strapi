import { createPortal } from "react-dom"

function ModalConfirmNewPassword({children}) {
    return(
        createPortal(
            <div className="modal-confirm-new-password" style={{display: children ? 'block': 'none'}}>{children}</div>,
            document.getElementById('modalConfirmNewPassword')
        )
    )
}

export {ModalConfirmNewPassword}