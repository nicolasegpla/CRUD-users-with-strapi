import { useNavigate  } from "react-router-dom"
import { useLocalStorage } from "../../Custom/useLocalStorage"
import Layout from "../../Components/Layout"
import Dashboard from "../Dashboard"
import './home.css'
import { useContext, useEffect } from "react"
import { Modal } from "../../Components/Modal"
import { GlobalContext } from "../../global/GlobalContext"
import  UpDatePasswordCom  from '../../Components/UpDatePassword'
import ModalConfirm from '../../Components/ModalConfirm'
import ModalAlerts from '../../Components/ModalAlerts'


function Home() {

    const { upDatePassword,  changePassword, closeChangePasswordConfirm, changePasswordError, closeChangePasswordTryAgain, changePasswordErrorServer, goHome } = useContext(GlobalContext)


    const jwt = useLocalStorage()
    
    const navigate = useNavigate()

    useEffect(() => {
        if(jwt.jwt == undefined) {
            navigate('/login')
        }
        
    }, [])
    return(
        <>
        <Layout>
            {
                jwt.jwt ? <Dashboard /> : null
            }
            <Modal>
                {upDatePassword && <UpDatePasswordCom />}
                
            </Modal>
            <Modal>
                { changePassword && <ModalConfirm title={'Successful password change'} label={'Continue'} fn={closeChangePasswordConfirm} /> }
            </Modal>
            <Modal>
                { changePasswordError && <ModalAlerts title={'Error'} text={'The data entered is not valid, please verify'} label={'Try again'} fn={closeChangePasswordTryAgain}/>}
            </Modal>
            <Modal>
                { changePasswordErrorServer && <ModalAlerts title={'Our mistake'} text={'At the moment we cannot change your password, try again later'} label={'Continue'} fn={goHome} />}
            </Modal>
            
            
        </Layout>
        </>
    )
}

export default Home