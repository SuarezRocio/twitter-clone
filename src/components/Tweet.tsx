import { ArrowsClockwise, ChatCircle, Heart } from "phosphor-react"
import "./Tweet.css"

interface TweetProps{
content: string
}

export const Tweet = (props: TweetProps) => {
  return (
    <div className="tweet">
      <a href="#" className="tweet">
        <img src="https://avatars.githubusercontent.com/u/93008622?v=4" alt=""/>
        <div className="tweet-content">
          <div className="tweet-content-header">
            <strong>Rocio Suarez</strong>
            <span>@rociosuarez</span>
          </div>  
          <p>
            {props.content}
          </p>
          <div className="tweet-content-footer">
            <button type="button">
              <ChatCircle/>
              20
            </button>
            <button type="button">
              <ArrowsClockwise/>
              20
            </button>
            <button type="button">
              <Heart/>
              20
            </button>
          </div>
        </div>
      </a>
    </div>
  )
}
