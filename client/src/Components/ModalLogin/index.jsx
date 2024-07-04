import { createPortal } from "react-dom";
import './modallogin.css'

function ModalLogin({children}) {
    return (
        createPortal(
            <div className="modalLogin" style={{display: children ? 'block': 'none'}}>{children}</div>,
            document.getElementById('modalLogin')
        )
    )
}

export { ModalLogin }   