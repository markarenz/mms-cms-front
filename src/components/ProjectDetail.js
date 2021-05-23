import React from "react"
import { Link } from "react-router-dom"
import PageHeader from "./blocks/PageHeader"
import { useParams } from "react-router-dom";
import HelmetComp from "./HelmetComp"
// const projects = require('../json/mms-projects--production.json')
const _ = require('lodash')

const PostDetail = ({ projects }) => {
  let helmetDisp='';
  const { slug } = useParams();
  const project = _.find(projects, {slug: slug});
  const [modalActive, setModalActive] = React.useState(false);
  const [modalImg, setModalImg] = React.useState('');
  const dismissModal = () =>{
    setModalActive(false);
    setModalImg('');
  }
  const handleLightBoxClick1 = () =>{
    setModalActive(true);
    setModalImg("https://s3.amazonaws.com/www.markmakesstuff.com/remote/images/projects/" + project.id + "-1.jpeg");
  }
  const handleLightBoxClick2 = () =>{
    setModalActive(true);
    setModalImg("https://s3.amazonaws.com/www.markmakesstuff.com/remote/images/projects/" + project.id + "-2.jpeg");
  }
  const handleLightBoxClick3 = () =>{
    setModalActive(true);
    setModalImg("https://s3.amazonaws.com/www.markmakesstuff.com/remote/images/projects/" + project.id + "-3.jpeg");
  }
  const handleLightBoxClick4 = () =>{
    setModalActive(true);
    setModalImg("https://s3.amazonaws.com/www.markmakesstuff.com/remote/images/projects/" + project.id + "-4.jpeg");
  }
  const handleLightBoxClick5 = () =>{
    setModalActive(true);
    setModalImg("https://s3.amazonaws.com/www.markmakesstuff.com/remote/images/projects/" + project.id + "-5.jpeg");
  }
  const handleLightBoxClick6 = () =>{
    setModalActive(true);
    setModalImg("https://s3.amazonaws.com/www.markmakesstuff.com/remote/images/projects/" + project.id + "-6.jpeg");
  }
    const photo = "projects/" + project.id + '.jpeg'
    const block={
      id: 'project-header',
      class: '',
      photo,
      headline: project.title,
      subhead: '',
    }
    const imagesStr = (project.images) ? project.images : '';
    const img1="https://s3.amazonaws.com/www.markmakesstuff.com/remote/images/projects/" + project.id + "-1.jpeg"
    const projectImage1=(imagesStr.includes(1)) ? <div className="img-cell item-1" style={{ backgroundImage: "url(" + img1 + ")" }} onClick={handleLightBoxClick1} /> : null

    const img2="https://s3.amazonaws.com/www.markmakesstuff.com/remote/images/projects/" + project.id + "-2.jpeg"
    const projectImage2=(imagesStr.includes(2)) ? <div className="img-cell item-2" style={{ backgroundImage: "url(" + img2 + ")" }} onClick={handleLightBoxClick2} /> : null

    const img3="https://s3.amazonaws.com/www.markmakesstuff.com/remote/images/projects/" + project.id + "-3.jpeg"
    const projectImage3=(imagesStr.includes(3)) ? <div className="img-cell item-3" style={{ backgroundImage: "url(" + img3 + ")" }} onClick={handleLightBoxClick3} /> : null

    const img4="https://s3.amazonaws.com/www.markmakesstuff.com/remote/images/projects/" + project.id + "-4.jpeg"
    const projectImage4=(imagesStr.includes(4)) ? <div className="img-cell item-4" style={{ backgroundImage: "url(" + img4 + ")" }} onClick={handleLightBoxClick4} /> : null

    const img5="https://s3.amazonaws.com/www.markmakesstuff.com/remote/images/projects/" + project.id + "-5.jpeg"
    const projectImage5=(imagesStr.includes(5)) ? <div className="img-cell item-5" style={{ backgroundImage: "url(" + img5 + ")" }} onClick={handleLightBoxClick5} /> : null

    const img6="https://s3.amazonaws.com/www.markmakesstuff.com/remote/images/projects/" + project.id + "-6.jpeg"
    const projectImage6=(imagesStr.includes(6)) ? <div className="img-cell item-6" style={{ backgroundImage: "url(" + img6 + ")" }} onClick={handleLightBoxClick6} /> : null

    const modalContent = (modalImg) ? <img alt="Lightbox" src={modalImg} onClick={dismissModal}/> : null
    const lightBoxClass = (modalActive) ? "active" : null
    helmetDisp = (project.title) ?
      <HelmetComp
        title={project.title}
        description={project.metadesc}
        image="og_img__home.jpg"
        pubDate={project.updated_at.split(' ').join('T') + '+01:00'}
      />
    : null
    const descriptionHtml = project.content.split("\n\n").join("<br /><br />");
    return(
      <div id="page">
      { helmetDisp }
        <PageHeader block={block}/>
        <article id="project-content">
          <div className="row container">
            <div className="col-md-6">
              <h2>Date</h2>
              { project.pub_date }

              <h2>Project Description</h2>
              <div dangerouslySetInnerHTML={{__html: descriptionHtml}}/>

              {
                (project.link && project.link!=='') &&
                <div className="text-left py-3">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">See for yourself</a>
                </div>
              }

              <div className="text-left py-3">
                <Link to="/work" className="btn btn-secondary">See more projects</Link>
              </div>

            </div>
            <div className="col-md-6" id="project-thumb-stage">
              { projectImage1 }
              { projectImage2 }
              { projectImage3 }
              { projectImage4 }
              { projectImage5 }
              { projectImage6 }
            </div>
          </div>
        </article>
        <div id="lightbox" className={lightBoxClass}>
          <div className="stage" onClick={dismissModal}>
            {modalContent}
          </div>
        </div>
      </div>
    )
};

export default PostDetail
