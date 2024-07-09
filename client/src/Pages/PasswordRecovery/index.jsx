import { useContext } from "react"
import FormForgottenPassword from "../../Components/FormForgottenPassword"
import Layout from "../../Components/Layout"
import { ModalSendEmail } from "../../Components/ModalEmailSendForgotPassword/ModalSendEmail"
import { GlobalContext } from "../../global/GlobalContext"
import  ModalEmailSendForgotPasword  from "../../Components/ModalEmailSendForgotPassword/index"
import './passwordrecovery.css'
import { ModalAlertsErrorEmail } from "../../Components/ModalAlertsErrorEmail"
import ModalAlerts from "../../Components/ModalAlerts"


function PasswordRecovery() {

    const {tryAgainEmailForgotPassword} = useContext(GlobalContext)

    const args = {
        title: 'Wrong email',
        text: 'Sorry, it seems the email is not associated with an account in the employer.',
        label: 'Try again'
    }

    const {emailModal, emailSendContinue, emailErrorInput } = useContext(GlobalContext)
    return(
        <>
            <Layout>
                <FormForgottenPassword />
                <ModalSendEmail>
                    {emailModal && <ModalEmailSendForgotPasword label={'Continue'} fnButton={emailSendContinue}/> }
                </ModalSendEmail>
                <ModalAlertsErrorEmail>
                    {emailErrorInput && 
                    <ModalAlerts 
                        title={args.title} 
                        text={args.text}
                        label={args.label}
                        fn={tryAgainEmailForgotPassword}
                    />}
                        
                </ModalAlertsErrorEmail>
            </Layout>
        </>
    )
}

export default PasswordRecovery