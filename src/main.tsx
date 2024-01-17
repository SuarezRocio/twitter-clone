import React from 'react'
import ReactDOM from 'react-dom/client'
import { Tweet } from './assets/components/Tweet'
import {Bell, BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, Sparkle, User} from "phosphor-react"

//Ferramenta de tipagem estatica para Javascript
//Tipagem estatica: Mecanismo para evitar erros ENQUANTO a gente ta desenvolvendo a nosso app
import "./global.css"

import twitterLogo from "./assets/Logo.png"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='layout'>
      <aside className='sidebar'>
        <img className='logo' src={twitterLogo} alt='Logo'/>
        <nav className='main-navigation'>
            <a className='active' href=''>
              <House weight='fill'/>
              Home
            </a>
            <a href=''>
              <Hash />
              Explore</a>
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
      <div className="content">
        <main className='timeline'>
         <div className='timeline-header'>
          Home 
          <Sparkle/>
         </div>
         <form className='new-tweet-form'>
             <label htmlFor='tweet'>
                <img src="https://avatars.githubusercontent.com/u/93008622?v=4" alt="Rocio Suarez"/>
                <textarea id='tweet' placeholder="What's happening?"/>
              </label> 
              <button type='submit'>Tweet</button>
         </form>

        <div className="separator"/>
        </main>   
       </div> 
    </div>
  </React.StrictMode>
)


/**
    <h1>Hello World</h1>  
 * <Tweet user="Eri" likes={10}>
      Meu primeiro tweet
    </Tweet>
    <Tweet user="Diego">
     Hello World
    </Tweet>
    <Tweet user="Carla">
      Testaaaaaaando
    </Tweet>  
    <Tweet user="Diego">
      Conteudo 4
    </Tweet>
   */