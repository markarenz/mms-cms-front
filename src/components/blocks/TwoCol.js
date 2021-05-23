import React from "react"
// import { Controller, Scene } from 'react-scrollmagic';

const TwoCol = (props) =>{
  const block = props.block
  const blockClass = "row container " + block.class
  const colClass = "col-md-6 text-" + block.align
  const content1 = block.html1.split("\n\n").join("<br /><br />").split("anim-me").join("")
  const content2 = block.html2.split("\n\n").join("<br /><br />").split("anim-me").join("")
  return (
    <div id={block.id} className={ blockClass } >
      <div className={colClass} dangerouslySetInnerHTML={{__html: content1 }} />
      <div className={colClass} dangerouslySetInnerHTML={{__html: content2 }} />
    </div>
  )
}
export default TwoCol
