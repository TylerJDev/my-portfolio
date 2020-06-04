import { Link } from "gatsby"
import React from "react"
import experienceStyles from "./experience.module.scss"

const Experience = () => (
  <div className={experienceStyles.exp}>
    <div className={experienceStyles.container}>
      <h3>Web Application Developer @ AudioEye</h3>
      <h4>September 2018 - Present</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non sem eros. Sed in nibh ullamcorper, feugiat elit eu, scelerisque sapien.  Ut leo leo, egestas vitae turpis sit amet.</p>
    </div>
    <div className={experienceStyles.container}>
      <h3>Certified Professional in Accessibility Core Competencies (CPACC)</h3>
      <h4>Issued December 2018</h4>
      <p>Certified Professional in Accessibility Core Competencies (CPACC)
      Issuing authority IAAP - International Association of Accessibility Professionals</p>
    </div>
  </div>
)

export default Experience
