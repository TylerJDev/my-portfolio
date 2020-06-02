import { Link } from "gatsby"
import React from "react"
import projectStyles from "./project.module.scss"

const Projects = () => (
  <div className={projectStyles.project + ' projects__outer'}>
    <a href="#" className={projectStyles.project_link + ' projects__link'}>
      <div className={projectStyles.project_inner + ' projects__inner'}>
        <div className={projectStyles.project_title}>
          <h3>DJ With Friends</h3>
        </div>

        <div className={projectStyles.project_bio}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non sem eros.</p>
        </div>

        <div className={projectStyles.project_skills}>
          <ul>
            <li>Vue.js</li>
            <li>Node.js</li>
            <li>ES6</li>
            <li>Express</li>
            <li>SCSS/SASS</li>
          </ul>
        </div>
      </div>
    </a>
  </div>
)

export default Projects
