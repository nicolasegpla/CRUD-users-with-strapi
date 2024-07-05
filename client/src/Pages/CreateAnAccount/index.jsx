import { useContext } from 'react'
import { GlobalContext } from '../../global/GlobalContext'
import { Modal } from '../../Components/ModalCreatedAccountCheck/Modal'
import FormCreateAccount from '../../Components/FormCreateAccount'
import Layout from '../../Components/Layout'
import ModalCreatedAccountCheck from '../../Components/ModalCreatedAccountCheck'
import './createanaccount.css'



function CreateAnAccount() {

    const { stateAccount } = useContext(GlobalContext)

    return(
        <>
            <Layout>
                <FormCreateAccount />
                <Modal>
                    {stateAccount && <ModalCreatedAccountCheck />}
                </Modal>
            </Layout>
        </>
    )
}

export default CreateAnAccount