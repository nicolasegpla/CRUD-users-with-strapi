import { useRoutes, BrowserRouter } from 'react-router-dom'
import Login from '../Login'
import CreateAnAccount from '../CreateAnAccount'
import NewPassword from '../NewPassword'
import PasswordRecovery from '../PasswordRecovery'
import NotFound from '../NotFound'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Login /> },
    { path: '/login', element: <Login /> },
    { path: '/create-an-account', element: <CreateAnAccount /> },
    { path: '/new-password', element: <NewPassword /> },
    { path: '/password-recovery', element: <PasswordRecovery /> },
    { path: '/*', element: <NotFound /> }
  ])

  return routes
}

function App() {
 

  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
