import React from 'react'
import {Bell, BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, Sparkle, User} from "phosphor-react"
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
          Home
        </NavLink>
        <a href=''>
          <Hash />
          Explore
        </a>
        <a href=''>
          <Bell/>
          Notifications</a>
        <a href=''>
          <Envelope/>
          Messages</a>
        <a href=''>
          <BookmarkSimple/>
          Bookmarks</a>
        <a href=''>
          <FileText/>
          Lists</a>
        <a href=''>
          <User/>
          Profile</a>
        <a href=''>
          <DotsThreeCircle/>
          More</a>
    </nav>
    <button className='new-tweet'
    type='button'>Tweet</button>
  </aside>
 
  )
}
