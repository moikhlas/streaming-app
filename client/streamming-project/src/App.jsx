import { Routes, Route } from 'react-router-dom'

import './App.css'

import Intro_Login_Page from './components/login-page/login-intro'
import Login from './components/login/login'
import Sending_Varification_Code from './components/signup/signup-stage1/signup1'
// import Conform_Varification_Code from './components/signup/signup-stage2/signup2.jsx'

function App() {



  return (
    <Routes>
      <Route path='/' element={<Intro_Login_Page />} />

      <Route path='/login' element={<Login />} />

      <Route path='signup'>
        <Route path='linksent' element={<Sending_Varification_Code />} />
        {/* <Route path='conform' element={<Conform_Varification_Code />} /> */}
      </Route>
    </Routes>
  )
}

export default App
