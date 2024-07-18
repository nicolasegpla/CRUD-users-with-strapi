import { useEffect } from "react"
import Layout from "../../Components/Layout"
import Nav from "../../Components/Nav"
import './dashboard.css'
import { useLocalStorage } from "../../Custom/useLocalStorage"
import { useNavigate } from "react-router-dom"

function Dashboard() {

    
    
    return(
        <>
        <Layout>
            <Nav />
            Dashboard
        </Layout>
        </>
    )
}

export default Dashboard