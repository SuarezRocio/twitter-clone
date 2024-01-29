import React from 'react'
import {Bell, BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, Pencil, Sparkle, User} from "phosphor-react"
import twitterLogo from "../assets/Logo.png"
import './Sidebar.css'
import { Link, NavLink } from 'react-router-dom'

export const Sidebar = () => {
  return (
    <aside className='sidebar'>
    <img className='logo' src={twitterLogo} alt='Logo'/>
    <nav className='main-navigation'>
      {/**el link va a estar activo
       * cuando el link sea la pagina actual
       */}
        <NavLink className='active' to='/'>
          <House weight='fill'/>
         <span>Home</span> 
        </NavLink>
        <a href=''>
          <Hash />
          <span>Explore</span>  
        </a>
        <a href=''>
          <Bell/>
          <span>Notifications</span> 
          </a>
        <a href=''>
          <Envelope/>
          <span>Messages</span> 
          </a>
        <a href=''>
          <BookmarkSimple/>
          <span>Bookmarks</span> 
          </a>
        <a href=''>
          <FileText/>
          <span>Lists</span> 
          </a>
        <a href=''>
          <User/>
          <span>Profile</span> 
          </a>
        <a href=''>
          <DotsThreeCircle/>
          <span>More</span> 
          </a>
    </nav>
    <button className='new-tweet'
    type='button'>
     <Pencil/> 
    <span>Tweet</span>
    </button>
  </aside>
 
  )
}
