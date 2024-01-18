import React, { FormEvent, KeyboardEvent, useState } from 'react'
import { Header } from '../components/Header'
import { Separator } from '../components/Separator'
import { Tweet } from '../components/Tweet'
import "./Status.css"
import { PaperPlaneRight } from 'phosphor-react'

/*const answers = [
  "Concordo...",
  "Olha, faz sentido!",
  "Parabéns pelo progresso"
]*/

export const Status = () => {
  const [newAnswer, setNewAnswer] = useState("")
const [answers, setAnswers] = useState([
 "Concordo..",
 "Olha, faz sentido!",
 "Parabens pelo progesso"
])


function createNewAnswer(event: FormEvent){
event.preventDefault()
console.log("teste");

/*const value = document.getElementById("tweet")
console.log(newTweet)
tweets.push(newTweet)*/

setAnswers([ newAnswer,...answers])
setNewAnswer("")
}
console.log("renderizo");
/**todo codigo es rendirao apenas cuando ya se modifca
 * un estado
 * toda ves que alteramos el estado de un componente, 
 * todo componente es recalculado
 */

/** Fluxo de rendericion
 * 1- Toda ves que alteramos el estado de un componente, todo componente es recalculado
 * 2- Toda ves que un componente padre renderiza
 * 3- Toda ves que alguna de sus propiedades mudaren
 */

/** Algoritmo de reconciliacion
 * 1- Crea en memoria una nueva version del html del componente
 * 2- El compara esa nueva version con la alteracion nueva del html con la version de mi estado anterior
 * 3- Aplicar las operaciones javascript para alterar solamente lo necesario del html
 */
function handleKeySubmit (event: KeyboardEvent) {
if( event.key === "Enter" && (event.ctrlKey || event.metaKey)){
  //submit
  setAnswers([ newAnswer,...answers])
  setNewAnswer("")
}
}

  return (
    
    <main className='status'>
    <Header title='Tweet'/>
    
    <Tweet content='
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, ipsam nobis qui, eveniet enim magnam, ad esse voluptates perspiciatis dolorum eligendi vel iure sit vitae unde ut rem alias soluta?'/>
    
   <Separator/>

    <form onSubmit={createNewAnswer} className='answer-tweet-form'>
        <label htmlFor='tweet'>
           <img src="https://avatars.githubusercontent.com/u/93008622?v=4" alt="Rocio Suarez"/>
           <textarea id='tweet' placeholder="Tweet your answer"
           value={newAnswer}
           onKeyDown={handleKeySubmit}
           onChange={(event) => {
            setNewAnswer(event.target.value)
           }}
           />
         </label> 
         <button type='submit'>
          <PaperPlaneRight/>
          <span>Answer</span>
          </button>
    </form>

   <div className="separator"/>


   {answers.map(answer => {
   return <Tweet key={answer} content={answer}/>
   })}

   </main>  
  )
}
