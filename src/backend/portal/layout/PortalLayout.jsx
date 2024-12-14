import React from 'react'
import Header from './header/Header'

import { Outlet } from 'react-router'
import './portal.css'
import Sidebar from './sidebar/Sidebar'
import '../../../assets/backend/css/icons.css'

function PortalLayout() {
    return (
        <>
           <div className="page">
               
                <Header />
                <Sidebar />
                <Outlet />
              
            </div>
        </>
    )
}

export default PortalLayout