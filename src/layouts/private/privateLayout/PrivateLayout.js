import React from 'react'
import Dashboard from '../../../views/private/Dashboard/Dashboard'
import FooterAdmin from './FooterAdmin'
import HeaderAdmin from './HeaderAdmin'
import SidebarAdmin from './SidebarAdmin'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';

function PrivateLayout({ children, pathNameTH, path }) {
  return (
    <>
      <div className="container-scroller">
        <HeaderAdmin />
         <div className="container-fluid page-body-wrapper">
          <SidebarAdmin />
          <div className="main-panel">

            <Dashboard />

            <FooterAdmin />

          </div>
        </div>
      </div>
    </>
  )
}

export default PrivateLayout