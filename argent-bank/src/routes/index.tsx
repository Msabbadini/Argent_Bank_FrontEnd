import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomePage from '../pages/index'
import Login from '../pages/login'
import ProfilPage from '../pages/profil'
import Footer from '../components/molecules/footer'

const Router = () => {


  return (
    <BrowserRouter>
      <Routes>
        {/* Route public */}
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<Login />} />
        {/* Route securisé */}
        <Route path="user" element={<ProfilPage />} />
      </Routes>

    </BrowserRouter>
  )
}

export default Router