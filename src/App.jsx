import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import About from './components/about.jsx'
import Work from './components/work.jsx'
import Services from './components/services.jsx'
import Blogs from './components/blogs.jsx'
import Connect from './components/Connect.jsx'
import AdminLogin from './components/AdminLogin.jsx'
import AdminPanel from './components/AdminPanel.jsx'
import { Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/work" element={<Work />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/services" element={<Services />} />
      <Route path="/connect" element={<Connect />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/admin" element={<AdminPanel />} />
    </Routes>
    </>
  )
}

export default App
