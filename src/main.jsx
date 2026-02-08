import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './routes/Router.jsx'
import { RouterProvider } from 'react-router'
import { FriendsProvider } from './providers/Provider.jsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FriendsProvider>
      <Toaster/>
      <RouterProvider router={router} />
    </FriendsProvider>
  </StrictMode>
)
