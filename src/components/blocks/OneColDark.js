import React from "react"
// import { Controller, Scene } from 'react-scrollmagic';

const OneColDark = (props) =>{
  const block = props.block
  if (block.id===''){block.id='block-1-col-dark-1'}
  const blockClass = "block-1-col-dark " + block.class
  const content = block.html.split("\n\n").join("<br /><br />").split("anim-me").join("")
  return (
    <section id={block.id} className={ blockClass } >
      <div className="bcg"></div>
      <div className="row container">
        <div className="col-md-12 text-center" dangerouslySetInnerHTML={{__html: content }} />
      </div>
    </section>
  )
}
export default OneColDark
