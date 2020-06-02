import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from "../components/projects/project"
import Experience from "../components/projects/experience"

const ProjectsPage = () => (
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
          <Projects/>
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

export default ProjectsPage
