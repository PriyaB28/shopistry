import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import { Outlet } from 'react-router'
// import '../../assets/frontend/js/plugins.init.js'
// import '../../assets/frontend/js/app.js'

function Layout() {
  return (
      <>
          <Header />
          <Outlet />
          <Footer />
      </>
  )
}

export default Layout