import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './frontend/login/Login'
import Layout from './frontend/layout/Layout'
import Home from './frontend/home/Home'
import UserRoutes from './routes/UserRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='' element={<Layout />} >
          <Route element={<UserRoutes />}>
            <Route index element={<Home />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
