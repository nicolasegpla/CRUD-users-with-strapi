import { createPortal } from "react-dom"
import './style.css'

function Modal({ children }) {
    return(
        createPortal(
            <div className="modal" style={{display: children ? 'block': 'none'}}>{children}</div>,
            document.getElementById('modalCheckNewAccount')
        )
    )
}

export { Modal }