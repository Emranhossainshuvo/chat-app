import { useContext } from 'react'
import './App.css'
import Home from './pages/Home'
import { AuthContext } from './context/AuthContext'

function App() {

  const {currentUser} = useContext(AuthContext); 

  console.log(currentUser)

  return (
    <Home />
  )
}

export default App
