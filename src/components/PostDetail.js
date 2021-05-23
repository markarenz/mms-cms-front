import React from "react"
import PageHeader from "./blocks/PageHeader"
import { useParams } from "react-router-dom";
import HelmetComp from "./HelmetComp"
const _ = require('lodash')
// const posts = require('../json/mms-posts--production.json')

const PostDetail = (props)=>{
  let helmetDisp='';
  const { slug } = useParams();
  const post = _.find(props.posts, {slug})
  const photo = "posts/" + post.id + '.jpeg'
  const block={
    id: 'post-header',
    class: '',
    photo,
    headline: post.title,
    subhead: '',
  }
  const contentDisp = post.content.split("\r\n").join("<br />").split("\n\n").join("<br /><br />")
  helmetDisp = (post.title) ?
    <HelmetComp
      title={post.title}
      description={post.metadesc}
      image="og_img__home.jpg"
      pubDate={post.updated_at.split(' ').join('T') + '+01:00'}
    />
  : null
  return(
    <div id="page">
      { helmetDisp }
      <PageHeader block={block}/>
      <article id="post-content">
        <div className="row container-narrow">
          <div className="col-md-12" dangerouslySetInnerHTML={{__html: contentDisp }} />
        </div>
      </article>
    </div>
  )
}
export default PostDetail
