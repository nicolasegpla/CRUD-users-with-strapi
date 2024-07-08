import { useContext } from "react"
import FormForgottenPassword from "../../Components/FormForgottenPassword"
import Layout from "../../Components/Layout"
import { ModalSendEmail } from "../../Components/ModalEmailSendForgotPassword/ModalSendEmail"
import { GlobalContext } from "../../global/GlobalContext"
import  ModalEmailSendForgotPasword  from "../../Components/ModalEmailSendForgotPassword/index"
import './passwordrecovery.css'


function PasswordRecovery() {

    const {emailModal, emailSendContinue } = useContext(GlobalContext)
    return(
        <>
            <Layout>
                <FormForgottenPassword />
                <ModalSendEmail>
                    {emailModal && <ModalEmailSendForgotPasword label={'Continue'} fnButton={emailSendContinue}/> }
                </ModalSendEmail>
            </Layout>
        </>
    )
}

export default PasswordRecovery