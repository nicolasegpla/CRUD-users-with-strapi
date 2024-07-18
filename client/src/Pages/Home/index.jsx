import { useNavigate  } from "react-router-dom"
import { useLocalStorage } from "../../Custom/useLocalStorage"
import Layout from "../../Components/Layout"
import Dashboard from "../Dashboard"
import './home.css'
import { useEffect } from "react"

function Home() {


    const jwt = useLocalStorage()
    
    const navigate = useNavigate()

    console.log(jwt.jwt)

    useEffect(() => {
        if(jwt.jwt == undefined) {
            navigate('/login')
        }else {
            console.log('dasboard')
        }
        
    }, [])
    return(
        <>
        <Layout>
            {
                jwt.jwt ? <Dashboard /> : null
            }
            
        </Layout>
        </>
    )
}

export default Home