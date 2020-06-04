import React, { Component } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from "../components/projects/project"
import Experience from "../components/projects/experience"

class ProjectsPage extends Component {
  constructor() {
    super();
    this.state = {
      showState: false
    }
  }
  
  showMoreProjects = () => {
    this.setState({showState: true});

    setTimeout(() => {
      const toFocus = document.querySelectorAll('.projects__link')[3];
      if (toFocus !== undefined) {
        toFocus.focus();
      }
    }, 50);
  }

  render() {
    return (
      <Layout>
        <SEO title="Projects" />
        <div id="projects">
          <div id="banner" className="container projects__banner">
            <h1>Projects and Experience</h1>
          </div>

          <div id="projectsBio" className="container">
              <div className="section__title">
                  <h2>Projects</h2>
                  <h3>Projects which I've created or contributed to</h3>
              </div>
              <div id="project__container">
                <Projects show={this.state.showState}/>
              </div>
              <div id="seeMore">
                {this.state.showState === false &&
                  <button id="seeMore_btn" onClick={this.showMoreProjects}>See more</button>
                }
              </div>
          </div>
          
          <div id="experienceBio" className="container">
              <div className="section__title">
                  <h2>Experience</h2>
                  <h3>All the EXP I've gained so far.</h3>
                </div>
                <Experience/>
          </div>
        </div>
      </Layout>
    )
  }
}

export default ProjectsPage
