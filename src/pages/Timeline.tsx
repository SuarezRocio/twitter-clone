import { FormEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import "./Timeline.css"
import { Info } from "phosphor-react"

/*const tweets = [
  "Meu primeiro tweet",
  "Teste",
  "Deu certo twetear"
]*/

let newTweet = ""

export const Timeline = () => {

const [tweets, setTweets] = useState([
  "Meu primeito tweet",
  "Teste",
  "Deu certo tweter!!"
])


function createNewTweet(event: FormEvent){
event.preventDefault()
console.log("teste");

/*const value = document.getElementById("tweet")
console.log(newTweet)
tweets.push(newTweet)*/

setTweets([ newTweet,...tweets])
}

  return (
    <main className='timeline'>
    <Header title='Home'/>
    
    <form onSubmit={createNewTweet} className='new-tweet-form'>
        <label htmlFor='tweet'>
           <img src="https://avatars.githubusercontent.com/u/93008622?v=4" alt="Rocio Suarez"/>
           <textarea id='tweet' placeholder="What's happening?"
           onChange={(event) => {
            console.log(event.target.value)
            newTweet = event.target.value
           }}
           />
         </label> 
         <button type='submit'>Tweet</button>
    </form>

   <div className="separator"/>

   <Separator/>

   {tweets.map(tweet => {
   return <Tweet key={tweet} content={tweet}/>
   })}

   </main>   
    )
}
