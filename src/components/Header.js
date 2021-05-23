import React from "react"
import { Link } from "react-router-dom"


class Header extends React.Component{
  constructor(props){
    super(props)
    this.state={
      headerClass: 'text-center',
      menuToggleClass: ''
    }
  }
  handleMenuToggleClick = (e)=>{
    e.preventDefault()
    if (this.state.menuToggleClass===''){
      this.setState({
        menuToggleClass: 'active'
      })
    } else {
      this.setState({
        menuToggleClass: ''
      })
    }
  }
  handleMenuClick=(e)=>{
    this.setState({
      menuToggleClass: ''
    })
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, { passive: true })
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll)
  }
  handleScroll = (event)=>{ // must be arrow function for SetState
    if (window.pageYOffset>100){
      this.setState({
        headerClass: 'text-center scrolling'
      })
    } else {
      this.setState({
        headerClass: 'text-center'
      })
    }
  }
  render(){
    return(
      <header id="mms-header" className={this.state.headerClass} style={{zIndex:10}}>
        <Link to="/"><img id="header-logo" src="/img/mms-logo.svg" alt="Mark Makes Stuff" /></Link>
        <a href="/" id="menu-toggle" aria-label="Menu Toggle" style={{zIndex:3}} onClick={this.handleMenuToggleClick} className={ this.state.menuToggleClass }>
          <span className="item-1"></span>
          <span className="item-2"></span>
          <span className="item-3"></span>
          <span className="item-4"></span>
          <span className="item-5"></span>
          <span className="item-6"></span>
        </a>
        <div id="modal-menu" className={ this.state.menuToggleClass } style={{zIndex:2}}>
          <ul>
            <li className="anim-me anim-from-left trans-delay-0-10">
              <Link to="/" onClick={this.handleMenuClick}>Home</Link>
            </li>
            <li className="anim-me anim-from-right trans-delay-0-20">
              <Link to="/work" onClick={this.handleMenuClick}>Work</Link>
            </li>
            <li className="anim-me anim-from-left trans-delay-0-30">
              <Link to="/blog" onClick={this.handleMenuClick}>Blog</Link>
            </li>
            <li className="anim-me anim-from-right trans-delay-0-40">
              <Link to="/bio" onClick={this.handleMenuClick}>Bio</Link>
            </li>
            <li className="anim-me anim-from-below trans-delay-0-5">
              <a href="https://twitter.com/MarkMakesStuff" onClick={this.handleMenuClick} rel="noopener noreferrer" target="_blank" className="item-last"><img id="footer-logo" className="responsive" src="/img/twitter-white.svg" alt="@MarkMakesStuff" style={{width:40, height:'auto'}} /></a>
            </li>
          </ul>
        </div>
      </header>
    )
  }
}
export default Header
