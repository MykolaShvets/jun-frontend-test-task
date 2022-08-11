import React from 'react';
import { Outlet } from 'react-router-dom';

import './Layout.css'

export const Layout = () => {
  return (
    <div className='container'>
      <Outlet />
    </div>
  )
}
