import React from "react"
//import { Controller, Scene } from 'react-scrollmagic';

class PageHeader extends React.Component{
  constructor(props){
    super(props)
    this.state={
      pho1Class: "anim-me anim-from-left trans-delay-0-25",
      pho2Class: "anim-me anim-from-right trans-delay-0-5"
    }
  }
  componentDidMount(){
    setTimeout(function() {
      this.setState({
        pho1Class: "anim-me anim-from-left trans-delay-0-25 anim-in",
        pho2Class: "anim-me anim-from-right trans-delay-0-5 anim-in"
      })
    }.bind(this), 150)

  }
  render(){
    const block = this.props.block
    if (block.id===''){block.id='page-header'}
    const blockClass = (block.class!=='') ? "page-header page-header bcg-parallax " + block.class : "page-header bcg-parallax"
    const photo = 'https://s3.amazonaws.com/www.markmakesstuff.com/remote/images/' + block.photo
    const sectionStyle = {
      backgroundImage: "url(" +  photo  + ")"
    };

    return(
      <section id={block.id} className={ blockClass } >
        <div className="bcg" style={ sectionStyle }></div>
        <div className="inner">
          <div className="row container anim-first-screen">
            <div className="col-md-12">
              <h1 id="pho-01" className={this.state.pho1Class}>{ block.headline }</h1>
              <h2 id="pho-02" className={this.state.pho2Class}><i>{ block.subhead }</i></h2>
            </div>
          </div>
          <div className="svg-box-top">
            <svg viewBox="0 0 1920 100" preserveAspectRatio="none" width="100%" height="60" className="line-top">
              <line x1="0" y1="100%" x2="100%" y2="0" stroke="red" fill="green" strokeDasharray="1.2%,2.4%"/>
            </svg>
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" width="100%" height="60" className="fill-top">
              <polygon points="0,0 0,80 80,0"/>
            </svg>
          </div>
          <div className="svg-box-bottom">
            <svg viewBox="0 0 1920 100" preserveAspectRatio="none" width="100%" height="60" className="line-bottom">
              <line x1="0" y1="80%" x2="100%" y2="0" strokeDasharray="1%,2%" />
            </svg>
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" width="100%" height="60" className="fill-bottom">
              <polygon points="0,100 100,100 100,20" />
            </svg>
          </div>
        </div>
      </section>
    )
  }
}
export default PageHeader
/*
class: ""
headline: "Mark Arenz"
id: "page-header-orange"
photo: "mms-page-headers-01.jpg"
subhead: "An experienced developer and media professional in Indianapolis Indiana, crafting websites, apps, and video content since 1992."
title: "Page Header"
type: "page-header-orange"


<script>
$(function() {
  var pageHeaderParallaxTl = new TimelineMax();
  pageHeaderParallaxTl
    .from('.page-header .bcg', 2, {y: '-20%', ease:Power0.easeNone}, 0);
  var pageHeaderParallaxScene = new ScrollMagic.Scene({
    triggerElement: '.page-header .bcg-parallax',
    triggerHook: 1,
    duration: '100%'
  })
  .setTween(pageHeaderParallaxTl)
  .addTo(controller);
});
</script>

*/
