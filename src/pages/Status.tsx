import React from 'react'
import { Header } from '../components/Header'
import { Separator } from '../components/Separator'
import { Tweet } from '../components/Tweet'
import "./Status.css"

const answers = [
  "Concordo...",
  "Olha, faz sentido!",
  "Parabéns pelo progresso"
]

export const Status = () => {
  return (
    
    <main className='status'>
    <Header title='Tweet'/>
    
    <Tweet content='
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, ipsam nobis qui, eveniet enim magnam, ad esse voluptates perspiciatis dolorum eligendi vel iure sit vitae unde ut rem alias soluta?'/>
    
   <Separator/>

    <form className='answer-tweet-form'>
        <label htmlFor='tweet'>
           <img src="https://avatars.githubusercontent.com/u/93008622?v=4" alt="Rocio Suarez"/>
           <textarea id='tweet' placeholder="Tweet your answer"/>
         </label> 
         <button type='submit'>Answer</button>
    </form>

   <div className="separator"/>


   {answers.map(answer => {
   return <Tweet key={answer} content={answer}/>
   })}

   </main>  
  )
}
