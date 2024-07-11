import { useContext } from "react"
import { GlobalContext } from "../../global/GlobalContext"
import Layout from "../../Components/Layout"
import NewPasswordform from "../../Components/NewPasswordForm"
import './newpassword.css'

function NewPassword() {
    const { seePassword, handlerSeePassword, seePasswordConfirm, handlerSeePasswordConfirm, handlerNewPassword, handlerNewPasswordConfirm,  validatorNewPassword, validatorConfirm, navigateToLogin } = useContext(GlobalContext)
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
                />
            </Layout>
        </>
    )
}

export default NewPassword