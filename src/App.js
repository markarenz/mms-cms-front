import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './css/app.css';
import './css/style.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageBuilderPage from "./components/PageBuilderPage";
import PostDetail from "./components/PostDetail";
import ProjectDetail from "./components/ProjectDetail";

function App() {
  const baseApiUrl = 'https://s3.amazonaws.com/www.markmakesstuff.com/remote/json';
  const [pages, setPages] = React.useState([]);
  const [posts, setPosts] = React.useState([]);
  const [projects, setProjects] = React.useState([]);
  const getPages = () => {
    const url = baseApiUrl + '/mms-pages--production.json';
    fetch(url).then(response => response.json()).then(data => {
      setPages(data);
    })
  }
  const getPosts = () => {
    const url = baseApiUrl + '/mms-posts--production.json';
    fetch(url).then(response => response.json()).then(data => {
      setPosts(data);
    })
  }
  const getProjects = () => {
    const url = baseApiUrl + '/mms-projects--production.json';
    fetch(url).then(response => response.json()).then(data => {
      setProjects(data);
    })
  }
  React.useEffect( () => {
    getPosts();
    getPages();
    getProjects();
  },[]);

  // do not display until pages and posts are available
  if (posts.length<1 || pages.length<1 || projects.length<1) return null;

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route
          path="/posts/:slug"
          // component={withTracker(PostDetail, { posts } )}
          component={() => <PostDetail posts={posts} />}
        />
        <Route
          path="/projects/:slug"
          // component={withTracker(ProjectDetail, { projects } )}
          component={() => <ProjectDetail projects={projects}/>}
        />
        <Route
          path="/*"
          // component={withTracker(PageBuilderPage, { posts, pages, projects } )}
          component={() => <PageBuilderPage pages={pages} posts={posts} projects={projects}/>}
        />
      </Switch>
      <Footer />
    </div>

  );
}

export default App;
