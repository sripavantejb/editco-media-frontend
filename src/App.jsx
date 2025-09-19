import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import About from './components/about.jsx'
import Work from './components/work.jsx'
import Blogs from './components/Blogs.jsx'
import Services from './components/services.jsx'
import Signin from './components/Signin.jsx'
import Signup from './components/Signup.jsx'
import Connect from './components/Connect.jsx'
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
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/connect" element={<Connect />} />
    </Routes>
    </>
  )
}

export default App
