import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'

const rootElement = document.getElementById('root')
const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID

if (!googleClientId) {
  console.warn('VITE_GOOGLE_CLIENT_ID is not set. Google authentication will be disabled.')
}

const AppTree = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

createRoot(rootElement).render(
  googleClientId ? (
    <GoogleOAuthProvider clientId={googleClientId}>
      {AppTree}
    </GoogleOAuthProvider>
  ) : (
    AppTree
  )
)

