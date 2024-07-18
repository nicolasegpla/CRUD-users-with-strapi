
import { useRoutes, BrowserRouter } from 'react-router-dom'
import { GlobalProvider } from '../../global/GlobalContext'
import Login from '../Login'
import CreateAnAccount from '../CreateAnAccount'
import NewPassword from '../NewPassword'
import PasswordRecovery from '../PasswordRecovery'
import NotFound from '../NotFound'
import Home from '../Home'
import './App.css'



const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Login /> },
    { path: '/login', element: <Login /> },
    { path: '/create-an-account', element: <CreateAnAccount /> },
    { path: '/new-password', element: <NewPassword /> },
    { path: '/password-recovery', element: <PasswordRecovery /> },
    { path: '/home', element: <Home />}, 
    { path: '/*', element: <NotFound /> }
  ])

  return routes
}

function App() {
 

  return (
    <>
      <BrowserRouter>
        <GlobalProvider>
          <AppRoutes />
          
        </GlobalProvider>
      </BrowserRouter>
    </>
  )
}

export default App
