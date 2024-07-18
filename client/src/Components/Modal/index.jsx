import { createPortal } from "react-dom";
import './modal.css'

function Modal({ children }) {
    return (
        createPortal(
            <div className="modal" style={{display: children ? 'block': 'none'}}>{children}</div>,
            document.getElementById('modal')
        )
    )
}

export {Modal}