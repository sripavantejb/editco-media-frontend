import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Work from './components/Work'
import Services from './components/Services'
// import Blogs from './components/blogs.jsx'
import Connect from './components/Connect'
import AdminLogin from './components/AdminLogin'
import AdminPanel from './components/AdminPanel'
import { Routes, Route } from 'react-router-dom'



function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/work" element={<Work />} />
      {/* <Route path="/blogs" element={<Blogs />} /> */}
      <Route path="/services" element={<Services />} />
      <Route path="/connect" element={<Connect />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/admin" element={<AdminPanel />} />
    </Routes>
    </>
  )
}

export default App
