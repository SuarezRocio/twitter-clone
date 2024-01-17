import React from 'react'
import ReactDOM from 'react-dom/client'
import { Tweet } from './components/Tweet'
import { Sidebar } from './components/Sidebar'

//Ferramenta de tipagem estatica para Javascript
//Tipagem estatica: Mecanismo para evitar erros ENQUANTO a gente ta desenvolvendo a nosso app
import "./global.css"
import { Header } from './components/Header'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='layout'>
      <Sidebar/>
      <div className="content">
        <main className='timeline'>
         <Header title='Home'/>
         
         <form className='new-tweet-form'>
             <label htmlFor='tweet'>
                <img src="https://avatars.githubusercontent.com/u/93008622?v=4" alt="Rocio Suarez"/>
                <textarea id='tweet' placeholder="What's happening?"/>
              </label> 
              <button type='submit'>Tweet</button>
         </form>

        <div className="separator"/>

        <Tweet/>
        <Tweet/>
        <Tweet/>
        <Tweet/>
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