
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './frontend/login/Login'
import PortalLayout from './backend/portal/layout/PortalLayout'
import Layout from './frontend/layout/Layout'
import Home from './frontend/home/Home'
import UserRoutes from './routes/UserRoutes'
import AdminRoutes from './routes/AdminRoutes'
import Dashboard from './backend/portal/dashboard/Dashboard'
import AboutUs from './frontend/aboutus/AboutUs'
import AddStudent from './backend/portal/student/AddStudent'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route  element={<AdminRoutes />}>
          <Route path='/admin'  element={<PortalLayout />} >
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='add-student' element={<AddStudent/>}/>
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path='' element={<Layout />} >
            <Route index element={<Home />} />
          <Route element={<UserRoutes />}>
            
          </Route>
          <Route path='/aboutus' element={<AboutUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
