import React from "react"
// import { Controller, Scene } from 'react-scrollmagic';

const OneCol = (props) =>{
  const block = props.block
  const blockClass = "row container " + block.class
  const colClass = "col-md-12 text-" + block.align
    const content = block.html.split("\n\n").join("<br /><br />").split("anim-me").join("")
  return (
    <div id={block.id} className={ blockClass } >
      <div className={colClass} dangerouslySetInnerHTML={{__html: content }} />
    </div>
  )
}
export default OneCol
