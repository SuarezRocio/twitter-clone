import { Sidebar } from "../components/Sidebar"
import React from 'react'
import { Outlet, RouterProvider } from 'react-router-dom'
import { router } from '../routes'
//<RouterProvider router={router}/>  
import "./Default.css"

export const Default = () => {
  return (
    <div className='layout'>
      <Sidebar/>
      <div className="content">
      <Outlet/>
       </div> 
    </div>
  )
}
