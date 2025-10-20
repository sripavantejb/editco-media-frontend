import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Work from './components/Work'
import Services from './components/Services'
// import Blogs from './components/blogs.jsx'
import Connect from './components/Connect'
import Login from './components/Login'
import Register from './components/Register'
import UserDashboard from './components/UserDashboard'
import AdminPanel from './components/AdminPanel'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'



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
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<UserDashboard />} />
      <Route path="/admin" element={<AdminPanel />} />
    </Routes>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
    </>
  )
}

export default App
