/* eslint-disable react/jsx-pascal-case */
import DefaultNavbar from './components/NavBar'
import CreateCardGeneral from './pages/CreateCardGeneral'
import Login from './pages/Login'
import ShareCard from './pages/ShareCard'
import QR from './pages/QR'
import Register from './pages/Register'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App () {
  return (
    <Router>
      <DefaultNavbar />
      <Routes>
        <Route path='/' element={<Register />} /> {/* cambiar a inicio */}
        <Route path='/register' element={<Register />} />
        {/* <Route path='/CreateCardSNS' element={<CreateCardSNS />} /> */}
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
