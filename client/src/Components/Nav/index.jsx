import { Bars3Icon } from "@heroicons/react/24/outline"
import perfil from '../../assets/perfil.jpg'
import './nav.css'
import { useState } from "react"


function Nav() {

    const [ boxIsOpen, setBoxIsOpen ] = useState(false)

    function openBoxAccount() {
        setBoxIsOpen(state => !state)
    }
    return(
        <>
            <nav className="nav">
                <div className="nav__div-menu">
                    <Bars3Icon className="nav__div-menu__icon" />
                </div>
                <div className="nav__div">
                    <figure onClick={openBoxAccount} className="nav__div__figure">
                        <img className="nav__div__figure__img" src={perfil} alt="imafen del perfil del usuario" />
                    </figure>
                    <div style={boxIsOpen ? {display: 'block'} : {display: 'none'}} className="nav__div__div-box">
                        <ul className="nav__div__div-box__ul">
                            <li>My account</li>
                            <li>Change Password</li>
                            <li>Logout</li>
                            <li>Delete account</li>
                        </ul>
                    </div>
                </div>

            </nav>
        </>
    )
}

export default Nav