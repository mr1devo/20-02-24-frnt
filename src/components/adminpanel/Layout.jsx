import React from 'react'
import Topbar from './Topbar'
import Sidebar from './Sidebar'

const Layout = ({ children,props }) => {
  return (
    <div>
      <Sidebar/>
      <Topbar />
      {children}
    </div>
  )
}

export default Layout
