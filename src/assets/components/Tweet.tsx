//import React from 'react'
interface TweetProps{
  user: string,
  children: string,
  likes?: number
}
//si una de ellas no fuese obligatoria colocar el
//signo de interrogacion


//border-radius: 8px
/*const tweetStyles = {
borderRadius: 8
}*/
//tweetStyles
export const Tweet = (props: TweetProps) => {
  return (
    <div className="tweet" style={{borderRadius :8}}>
    Tweet
    <strong>{props.user}</strong>
    <p>{props.children}</p>
    <button>Like{props.likes ?? 0}</button>
    </div>
  )
}
