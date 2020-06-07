import { Link } from "gatsby"
import React from "react"
import experienceStyles from "./experience.module.scss"

const Experience = () => (
  <div className={experienceStyles.exp}>
    <div className={experienceStyles.container}>
      <h3>Web Application Developer @ AudioEye</h3>
      <h4>September 2018 - Present</h4>
      <p>Responsible for developing, testing, implementing, and maintaining JavaScript based fixes for issues of accessibility that exist on client websites.
        <ul className={experienceStyles.expList}>
          <li>Applied WAI-ARIA authoring guidelines and best practices to client websites to ensure WCAG 2.1 AA requirements.</li>
          <li>Implemented custom accessible technology solutions for varying client websites.</li>
          <li>Responsible for ensuring multiple fortune 500 websites meet ADA compliance.</li>
          <li>Collaborated with the team to produce internal accessibility guidelines when remediating client websites.</li>
          <li>Utilized JavaScript to implement remediations on client websites and ensure backwards compatibility with IE11.</li>
        </ul>
    </p>
    </div>
    <div className={experienceStyles.container}>
      <h3>Certified Professional in Accessibility Core Competencies (CPACC)</h3>
      <h4>Issued December 2018</h4>
      <p>Certified Professional in Accessibility Core Competencies (CPACC).
      Issuing authority IAAP - International Association of Accessibility Professionals.</p>
    </div>
  </div>
)

export default Experience
