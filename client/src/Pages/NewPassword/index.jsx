import { useContext } from "react"
import { GlobalContext } from "../../global/GlobalContext"
import { ModalConfirmNewPassword } from '../../Components/NewPasswordForm/ModalConfirmNewPassword'
import Layout from "../../Components/Layout"
import NewPasswordform from "../../Components/NewPasswordForm"
import './newpassword.css'
import ModalConfirm from "../../Components/ModalConfirm"
import ModaolAlerts from '../../Components/ModalAlerts'
import {ModalError} from '../../Components/ModalErrorCreatedAccount/ModalError'

function NewPassword() {
    const { seePassword, handlerSeePassword, seePasswordConfirm, handlerSeePasswordConfirm, handlerNewPassword, handlerNewPasswordConfirm,  validatorNewPassword, validatorConfirm, navigateToLogin, modalConfirm, modalErrorNewPassword, tryAgainChangeNewPassword, newPassword } = useContext(GlobalContext)
    return(
        <>
            <Layout>
                <NewPasswordform 
                    h1={'PATRON'} 
                    spanh={'Set your new password'} 
                    ph={'Your new password should be different from passwords previously used.'} 
                    buttont={'Confirm'} 
                    pl={'Back'} 
                    spanl={'login'} 
                    statePassword={seePassword}
                    statePasswordConfirm={seePasswordConfirm}
                    changeTypePassword={handlerSeePassword}
                    changeTypePasswordConfirm={handlerSeePasswordConfirm}
                    handlerNewP={handlerNewPassword} 
                    handlerNewPc={handlerNewPasswordConfirm}
                    validatorNewPassword={validatorNewPassword}
                    validatorConfirm={validatorConfirm}
                    navigateToLogin={navigateToLogin}
                    value={newPassword.password}
                    valueConfirm={newPassword.passwordConfirmation}
                />
                <ModalConfirmNewPassword>
                    {
                        modalConfirm && <ModalConfirm title={'Password reset!'} text={'Your password has been successfully reset, click below to continue your access'} label={'Continue'} fn={navigateToLogin} /> 
                    }
                </ModalConfirmNewPassword>
                <ModalError>
                    {
                         modalErrorNewPassword && <ModaolAlerts title={'Error'} text={'Sorry, it was not possible to change your password, check your internet connection and try again'} label={'Try again'} fn={tryAgainChangeNewPassword} />
                    }
                </ModalError>
            </Layout>
        </>
    )
}

export default NewPassword