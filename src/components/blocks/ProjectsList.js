import React from "react"
import { Link } from "react-router-dom"
// const projects = require('../../json/mms-projects--production.json')

// import { Controller, Scene } from 'react-scrollmagic';

class ProjectsList extends React.Component{
  constructor(props){
    super(props)
    console.log('inside constructor for projectsList', props);
    this.state={
      pg:1,
      numItems: this.props.block.numitems,
      lastPage:false,
      paged: false,
      itemsPerPage: 6,
      maxPage: Math.ceil(this.props.projects.length/12)
    }
  }
  handleClickNext= ()=>{
    window.scrollTo(0, 0);
    this.setState((prevState, props) => ({
        pg: prevState.pg + 1
    }));
  }
  handleClickPrev= ()=>{
    window.scrollTo(0, 0);
    this.setState((prevState, props) => ({
        pg: prevState.pg - 1
    }));
  }
  componentDidMount(){
    if (this.props.block.numitems<1){
      this.setState({
        paged: true,
        direction_anims: ["anim-from-left" , "anim-from-below" , "anim-from-right"],
        itemsPerPage: 12
      })
    }
  }
  render(){
    const block = this.props.block;
    const projects = this.props.projects;
    if (block.id===''){block.id='projects-list'}
    const blockClass = "projects-list num-items-" + block.numitems + " " + block.class
    const iStart=(this.state.pg-1)*this.state.itemsPerPage
    const iStop=iStart+this.state.itemsPerPage
    const prevLink = (this.state.pg>1) ? <button className="btn btn-outline-white" onClick={this.handleClickPrev}>Previous</button> : ""
    const nextLink = (this.state.pg<this.state.maxPage) ? <button className="btn btn-outline-white" onClick={this.handleClickNext}>Next</button> : ""
    const pagination = (this.state.paged)
      ?
          <div>
            { prevLink }
            &nbsp;
            { nextLink }
          </div>
      :
        <Link to="/work" className="btn btn-outline-white">See More Projects</Link>

    const projectsDisp = projects.slice(iStart, iStop).map( (project, i)=>{
      const img_url='url(https://s3.amazonaws.com/www.markmakesstuff.com/remote/images/projects/thumb--' + project.id + '.jpeg)'
      const url="/projects/" + project.slug
      return (
        <div key={i} className="col-md-4 post-cell anim-me2 { this.state.direction_anims[i%3] } trans-delay-0-25" id="post-{ i }">
          <div className="inner">
            <Link to={ url }>
              <div className="bg-wrap">
                <div className="bg" style={{backgroundImage: img_url}}></div>
              </div>
            </Link>
            <Link to={ url }>
              <h3>{ project.title }</h3>
            </Link>
          </div>
        </div>
      )
    })
    return(
      <section id={block.id} className={ blockClass } >
        <h2 className="text-center">projects();</h2>
        <div className="stage">
          <div className="container">
            <div className="row">
              { projectsDisp }
            </div>
          </div>
        </div>
        <div className="row container">
          <div className="col-md-12 text-center">
            { pagination }
          </div>
        </div>

      </section>
    )
  }
}
export default ProjectsList
