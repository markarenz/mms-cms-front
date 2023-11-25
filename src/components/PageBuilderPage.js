import React from "react"
import HelmetComp from "./HelmetComp"
import PageHeader from "./blocks/PageHeader"
import PageHeaderOrange from "./blocks/PageHeaderOrange"
import OrangeIcons from "./blocks/OrangeIcons"
import ProjectsList from "./blocks/ProjectsList"
import PostsList from "./blocks/PostsList"
import OneColDark from "./blocks/OneColDark"
import OneCol from "./blocks/OneCol"
import TwoCol from "./blocks/TwoCol"

import TwitterFeed from "./blocks/TwitterFeed"
import CtaOne from "./blocks/CtaOne"


import BlockNotFound from "./blocks/BlockNotFound"
const _ = require('lodash')
// const pagesContent = require('../json/mms-pages--production.json')
const content404 = require('../json/content-404.json')



class PageBuilderPage extends React.Component{
  constructor(props){
    super(props)
    this.state={
      slug: this.props.slug,
      page: {}
    }
  }

  render(){

    const this_slug = (window.location.pathname==='/') ? 'mms-home' : window.location.pathname.slice( 1 );
    let pageObj=_.find(this.props.pages, {slug: this_slug})
    if (!pageObj){
      pageObj = content404
    }
    // this.setState({
    //   page: pageObj
    // })

    const page = pageObj //this.state.page
    let helmetDisp=''
    let pageDisp=''
    if (page.title){
        pageDisp=JSON.parse(page.content).map( (block, i)=>{
        // find component for type and pass props

          switch(block.type){
            case '1-col':
            return(
              <OneCol key={i} block={block} />
            )
            case '2-col':
            return(
              <TwoCol key={i} block={block} />
            )
            case 'twitter-feed':
            return(
              <TwitterFeed key={i} block={block} />
            )
            case 'cta-1':
            return(
              <CtaOne key={i} block={block} />
            )
            case '1-col-dark':
            return(
              <OneColDark key={i} block={block} />
            )
            case 'posts-list':
            return(
              <PostsList key={i} block={block} posts={this.props.posts}/>
            )
            case 'page-header-orange':
            return(
              <PageHeaderOrange key={i} block={block} />
            )
            case 'page-header':
            return(
              <PageHeader key={i} block={block} />
            )
            case 'orange-icons':
            return(
              <OrangeIcons key={i} block={block} />
            )
            case 'projects-list':
            console.log('send', this.props);
            return(
              <ProjectsList key={i} block={block} projects={this.props.projects}/>
            )
            default:
            return(
              <BlockNotFound key={i} block={block} />
            )
          }
      })
    }
    helmetDisp = (page.title) ?
      <HelmetComp
        title={page.title}
        description={page.metadesc}
        image="og_img__home.jpg"
        pubDate={page.updated_at.split(' ').join('T') + '+01:00'}
      />
    : null

    return(
      <div id="page">
        { helmetDisp }
        { pageDisp }
      </div>
    )
  }
}
export default PageBuilderPage

//"2019-06-16T19:08:47+01:00"
/* Page Slugs: mms-home, blog, work, bio */
