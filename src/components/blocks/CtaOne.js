import React from "react"
// import { Controller, Scene } from 'react-scrollmagic';
import { Link } from "react-router-dom"

const CtaOne = (props) =>{
  const block = props.block
  if (block.id===''){block.id='cta-1'}
  const blockClass = "cta-1 " + block.class
  const isInternal = block.buttonLink[0] === '/';
  return (
    <section id={block.id} className={ blockClass } >
      <div className="bcg" style={{ backgroundImage: "url(https://s3.amazonaws.com/www.markmakesstuff.com/remote/images/" + block.photo + ")"}}></div>
      <div className="row container">
        <div className="col-md-12 text-center">
          <h2 className="anim-me2 anim-from-left" id="cta-1-h2">{ block.headline }</h2>
          <h3 className="anim-me2 anim-from-right trans-delay-0-25" id="cta-1-h3">{ block.subhead }</h3>
          { isInternal ?
            (<Link
              to={ block.buttonLink}
              className="btn btn-primary anim-from-below trans-delay-0-5"
              id="cta-1-btn"
            >
              { block.buttonLabel }
            </Link>)
            : (<a
                href={block.buttonLink}
                className="btn btn-primary anim-from-below trans-delay-0-5"
                id="cta-1-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                { block.buttonLabel }
              </a>
              )
          }          
        </div>
      </div>
    </section>
  )
}
export default CtaOne
