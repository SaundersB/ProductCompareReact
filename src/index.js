import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './components'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

const router = createBrowserRouter([
  {
    path: '*',
    element: <App />
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
)
