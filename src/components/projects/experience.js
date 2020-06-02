import { Link } from "gatsby"
import React from "react"
import experienceStyles from "./experience.module.scss"

const Experience = () => (
  <div className={experienceStyles.exp}>
    <div className={experienceStyles.container}>
      <h3>JavaScript Developer @ SoSo Networks</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non sem eros. Sed in nibh ullamcorper, feugiat elit eu, scelerisque sapien.  Ut leo leo, egestas vitae turpis sit amet.</p>
    </div>
    <div className={experienceStyles.container}>
      <h3>Certified Professional in Accessibility Core Competencies (CPACC)</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non sem eros. Sed in nibh ullamcorper, feugiat elit eu, scelerisque sapien.  Ut leo leo, egestas vitae turpis sit amet.</p>
    </div>
  </div>
)

export default Experience
