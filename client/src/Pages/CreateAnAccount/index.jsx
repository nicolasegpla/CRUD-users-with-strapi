import { useContext } from 'react'
import { GlobalContext } from '../../global/GlobalContext'
import { Modal } from '../../Components/ModalCreatedAccountCheck/Modal'
import { ModalError } from '../../Components/ModalErrorCreatedAccount/ModalError'
import FormCreateAccount from '../../Components/FormCreateAccount'
import Layout from '../../Components/Layout'
import ModalCreatedAccountCheck from '../../Components/ModalCreatedAccountCheck'
import ModalErrorCreatedAccount from '../../Components/ModalErrorCreatedAccount'
import './createanaccount.css'





function CreateAnAccount() {

    const { stateAccount, stateError } = useContext(GlobalContext)

    return(
        <>
            <Layout>
                <FormCreateAccount />
                <Modal>
                    {stateAccount && <ModalCreatedAccountCheck />}
                </Modal>
                <ModalError>
                    {stateError && <ModalErrorCreatedAccount />}
                </ModalError>
            </Layout>
        </>
    )
}

export default CreateAnAccount