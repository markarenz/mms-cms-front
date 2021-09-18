import React from "react"

const Footer= (props)=>{
  return(
    <footer>
      <div className="top-spikes orange"></div>
      <div className="row container py-5">
        <div className="col-md-4 item-1">
          <a href="/"><img id="footer-logo" className="responsive" src="/img/mms-logo-text.png" alt="Mark Makes Stuff" /></a>
        </div>
        <div className="col-md-4 item-2">
          <h2>Mark Arenz</h2>
          <a href="tel:+13174420631" className="tel">(317) 442-0631</a><br />
          <a href="mailto:arenz.mark@gmail.com">arenz.mark@gmail.com</a><br />
          <a href="https://twitter.com/MarkMakesStuff" target="_blank" rel="noreferrer noopener"><img id="footer-logo" className="responsive" src="/img/twitter-white.svg" alt="@MarkMakesStuff" style={{width:40,height:"auto", marginTop:10}} /></a>
        </div>
        <div className="col-md-4 item-3">
          <form action="https://formspree.io/f/mpzkbrvv" method="POST" data-form="" id="footer-contact">
          	<input type="hidden" name="_next" value="/contact-thank-you" />
          	<div className="form__field">
          		<input type="text" name="name" data-validate-name="" className="form-control my-1" placeholder="Name" aria-label="Name" required />
          	</div>
          	<div className="form__field">
          	   <input type="email" name="email" data-validate-email="" className="form-control my-1" placeholder="Email" aria-label="Email" required />
          	</div>
            <input type="submit" value="SEND" className="form-control"/>
          </form>

        </div>
      </div>
      <div className="row copyright">
        <div className="col-md-12">
          <small>
            &copy;{ new Date().getFullYear() } Mark Arenz  - MarkMakesStuff.com
          </small>
        </div>
      </div>
    </footer>
  )
}
export default Footer
