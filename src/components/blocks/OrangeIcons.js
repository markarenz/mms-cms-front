import React from "react"

import { Controller, Scene } from 'react-scrollmagic';

import iconPHP from '../../img/icons/php.svg'
import iconLaravel from '../../img/icons/laravel.svg'
import iconMYSQL from '../../img/icons/mysql.svg'
// import iconWP from '../../img/icons/wp.svg'
// import iconFP from '../../img/icons/fp.svg'
import iconHTML from '../../img/icons/html.svg'
import iconCSS from '../../img/icons/css.svg'
import iconIOS from '../../img/icons/ios.svg'
import iconCC from '../../img/icons/cc.svg'
import iconReact from '../../img/icons/react.svg';
import iconNode from '../../img/icons/node.svg';

class OrangeIcons extends React.Component{
  constructor(props){
    super(props)
    const thisYear = new Date().getFullYear()
    this.state={
      yearsCount:1,
      yearsExperience: thisYear-1992
    }
  }
  countUp = ()=>{
    if (this.state.yearsCount<this.state.yearsExperience){
      this.setState((prevState, props) => ({
          yearsCount: prevState.yearsCount + 1
      }));
      this.timerHandle = setTimeout(() => {
          this.countUp()
       }, 200)
    }
  }
  componentDidMount(){
    this.countUp()
  }
  componentWillUnmount() {
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
      this.timerHandle = 0;
    }
  }

  render(){
    const block = this.props.block
    if (block.id===''){block.id='orange-icons'}
    const blockClass = "orange-icons " + block.class
    return(
      <section id={block.id} className={ blockClass } >

        <div className="row container text-right">
          <div className="col-md-4 count-up-wrap pr-5">
            <h2 className="count-up">{this.state.yearsCount}</h2>
          </div>
          <div className="col-md-8 text-left pt-4 pl-5">
            <Controller>
              <Scene duration={800} triggerHook={.8} classToggle="anim-in" reverse={false} triggerElement="#tgr-oi-01" >
                <div id="tgr-oi-01" className="anim-me anim-from-left">
                  <h3>{ this.state.yearsExperience } years in the agency world, delivering projects and working with clients.</h3>
                </div>
              </Scene>
              <Scene duration={800} triggerHook={.8} classToggle="anim-in" reverse={false} triggerElement="#tgr-oi-02" >
                <div id="tgr-oi-02" className="anim-me anim-from-left trans-delay-0-25">
                  <h3><i>This is not my first rodeo.</i></h3>
                </div>
              </Scene>
            </Controller>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-md-12">

          <Controller>
            <Scene duration={800} triggerHook={.8} classToggle="anim-in" reverse={false} triggerElement="#tgr-oi-03" >
              <div id="tgr-oi-03" className="anim-me anim-from-below">
              <h2 className="text-center item-2">
                <svg viewBox="0 0 30 30" preserveAspectRatio="none" width="30" height="30">
                  <line x1="95%" y1="5%" x2="25%" y2="5%" stroke="white" strokeWidth="2" />
                  <line x1="25%" y1="5%" x2="25%" y2="95%" stroke="white" strokeWidth="2" />
                  <line x1="50%" y1="75%" x2="25%" y2="95%" stroke="white" strokeWidth="2" />
                  <line x1="5%" y1="75%" x2="25%" y2="95%" stroke="white" strokeWidth="2" />
                </svg>
                skills();
                <svg viewBox="0 0 30 30" preserveAspectRatio="none" width="30" height="30">
                  <line x1="5%" y1="5%" x2="75%" y2="5%" stroke="white" strokeWidth="2" />
                  <line x1="75%" y1="5%" x2="75%" y2="95%" stroke="white" strokeWidth="2" />
                  <line x1="50%" y1="75%" x2="75%" y2="95%" stroke="white" strokeWidth="2" />
                  <line x1="100%" y1="75%" x2="75%" y2="95%" stroke="white" strokeWidth="2" />
                </svg>
              </h2>
              </div>
            </Scene>
          </Controller>
          </div>
        </div>
        <div className="row pt-2">
          <div className="col-md-1">
          </div>
          <div className="col-md-2">
            <div className="icon-group">
              <img src={ iconReact } alt="FinalCut" />
              <h3>ReactJS</h3>
            </div>
          </div>
          <div className="col-md-2">
            <div className="icon-group">
              <img src={ iconNode } alt="Node" />
              <h3>NodeJS</h3>
            </div>
          </div>
          <div className="col-md-2">
            <div className="icon-group">
              <img src={ iconLaravel } alt="Laravel" />
              <h3>Laravel Framework</h3>
            </div>
          </div>
          <div className="col-md-2">
            <div className="icon-group">
              <img src={ iconPHP } alt="PHP" />
              <h3>PHP</h3>
            </div>
          </div>
          <div className="col-md-2">
            <div className="icon-group">
              <img src={ iconMYSQL } alt="mySQL" />
              <h3>mySQL</h3>
            </div>
          </div>
          <div className="col-md-1">
          </div>
        </div>
        <div className="row">
          <div className="col-md-2">
          </div>
          <div className="col-md-2">
            <div className="icon-group">
              <img src={ iconCC } alt="Creative Cloud" />
              <h3>Creative Cloud</h3>
            </div>
          </div>
          <div className="col-md-2">
            <div className="icon-group">
              <img src={ iconHTML } alt="HTML" />
              <h3>HTML/Javascript</h3>
            </div>
          </div>
          <div className="col-md-2">
            <div className="icon-group">
              <img src={ iconCSS } alt="SCSS/CSS" />
              <h3>SASS/SCSS</h3>
            </div>
          </div>
          <div className="col-md-2">
            <div className="icon-group">
              <img src={ iconIOS } alt="iOS" />
              <h3>iPhone Apps</h3>
            </div>
          </div>
          <div className="col-md-2">
          </div>
        </div>
        <div className="endcap-orange">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" width="100%" height="60" className="fill-top">
            <polygon points="0,0 0,100 100,0" />
          </svg>
        </div>
      </section>
    )
  }
}
export default OrangeIcons
