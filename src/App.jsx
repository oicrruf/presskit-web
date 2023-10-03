/* eslint-disable react/jsx-pascal-case */
import DefaultNavbar from './components/NavBar'
import CreateCardGeneral from './pages/CreateCardGeneral'
import Presskit from './pages/Presskit'
import ShareCard from './pages/ShareCard'
import QR from './pages/QR'
import Register from './pages/Register'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PrincipalPage from './pages/PrincipalPage'
import Sns from './pages/Sns'

function App () {
  return (
    <Router>
      <DefaultNavbar />
      <Routes>
        <Route path='/' element={<PrincipalPage />} /> {/* cambiar a inicio */}
        <Route path='/register' element={<Register />} />
        <Route path='/CreateCardSNS' element={<Sns />} />
        <Route path='/CreateCardGeneral' element={<CreateCardGeneral />} />
        <Route path='/ShareCard' element={<ShareCard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/QR' element={<QR />} />
        {/* <Route path='/Presskit' element={<Presskit />} /> */}
      </Routes>
    </Router>
  )
}

export default App
