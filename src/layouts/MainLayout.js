import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header';
import '../App.scss';


function MainLayout() {
  return (
    <div>
        <Header/>
        <div>
            <Outlet/>
        </div>
    </div>
  )
}

export default MainLayout;