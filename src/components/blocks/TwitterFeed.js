import React from "react"
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const TwitterFeed = (props) =>{
  const block = props.block
  if (block.id===''){block.id='twitter-feed'}
  const blockClass = "twitter-feed " + block.class
  return (
    <section id={block.id} className={ blockClass } >
    <h2 className="text-center">social();</h2>
      <div className="row container-narrow">
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="MarkMakesStuff"
          options={{height: 600, width: 600}}
        />
      </div>
    </section>
  )
}
export default TwitterFeed
