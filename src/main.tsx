import React from 'react'
import ReactDOM from 'react-dom/client'
import { Sidebar } from './components/Sidebar'

//Ferramenta de tipagem estatica para Javascript
//Tipagem estatica: Mecanismo para evitar erros ENQUANTO a gente ta desenvolvendo a nosso app
import "./global.css"
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
//import { Timeline } from './pages/Timeline'
//<Timeline/>

// forEach / map
//forEach => no tiene retorna
//map => tiene retorno

ReactDOM.createRoot(document.getElementById('root')!).render(
  //<React.StrictMode>
       <RouterProvider router={router}/>  
 // </React.StrictMode>
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