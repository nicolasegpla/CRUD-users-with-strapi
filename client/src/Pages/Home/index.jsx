import { useNavigate  } from "react-router-dom"
import { useLocalStorage } from "../../Custom/useLocalStorage"
import Layout from "../../Components/Layout"
import Dashboard from "../Dashboard"
import './home.css'
import { useContext, useEffect } from "react"
import { Modal } from "../../Components/Modal"
import { GlobalContext } from "../../global/GlobalContext"
import  UpDatePasswordCom  from '../../Components/UpDatePassword'


function Home() {

    const { upDatePassword } = useContext(GlobalContext)


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
            
            
        </Layout>
        </>
    )
}

export default Home