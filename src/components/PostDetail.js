import React from "react"
import PageHeader from "./blocks/PageHeader"
import { useParams } from "react-router-dom";
import HelmetComp from "./HelmetComp"
const _ = require('lodash')
// const posts = require('../json/mms-posts--production.json')

const PostDetail = (props)=>{
  const [modalActive, setModalActive] = React.useState(false);
  const [modalImg, setModalImg] = React.useState('');
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
  const handleMainContentClick = (e) => {
    if (e.target.classList["0"] === "modal-responsive") {
      const src = e.target.src;
      setModalImg(src);
      setModalActive(true);
    }
  }
  const dismissModal = () => {
    setModalImg('');
    setModalActive(false);
  }
  const modalContent = (modalImg) ? <img alt="Lightbox" src={modalImg} onClick={dismissModal}/> : null
  const lightBoxClass = (modalActive) ? "active" : null
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
          <div
            className="col-md-12"
            dangerouslySetInnerHTML={{__html: contentDisp }}
            onClick={handleMainContentClick}
          />
        </div>
      </article>
      <div id="lightbox" className={lightBoxClass}>
          <div className="stage" onClick={dismissModal}>
            {modalContent}
          </div>
        </div>
    </div>
  )
}
export default PostDetail
