import React from 'react'
import ReactDOM from 'react-dom/client'
import { Tweet } from './components/Tweet'
import { Sidebar } from './components/Sidebar'

//Ferramenta de tipagem estatica para Javascript
//Tipagem estatica: Mecanismo para evitar erros ENQUANTO a gente ta desenvolvendo a nosso app
import "./global.css"
import { Header } from './components/Header'
import { Separator } from './components/Separator'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'

const tweets = [
  "Meu primeiro tweet",
  "Teste",
  "Deu certo twetear"
]

// forEach / map
//forEach => no tiene retorna
//map => tiene retorno

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='layout'>
      <Sidebar/>
      <div className="content">
        <main className='timeline'>
         <Header title='Home'/>
         
        <RouterProvider router={router}/>  

         <form className='new-tweet-form'>
             <label htmlFor='tweet'>
                <img src="https://avatars.githubusercontent.com/u/93008622?v=4" alt="Rocio Suarez"/>
                <textarea id='tweet' placeholder="What's happening?"/>
              </label> 
              <button type='submit'>Tweet</button>
         </form>

        <div className="separator"/>

        <Separator/>

        {tweets.map(tweet => {
        return <Tweet key={tweet} content={tweet}/>
        })}

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