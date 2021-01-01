import { Link } from "gatsby"
import React from "react"
import experienceStyles from "./experience.module.scss"

const Experience = () => (
  <div className={experienceStyles.exp}>
    <div className={experienceStyles.container}>
    <h3>Software Development Engineer In Test (SDET) @ AudioEye</h3>
      <h4>September 2020 - Present</h4>
      <p>AudioEye is the industry-leading digital accessibility software solution provider, delivering web accessibility compliance to start-ups and Fortune 500 companies.</p>
      <p>I was responsible for testing, automation of existing processes, being an A11y SME, aiding with Manual QA testing, and creating test cases.</p>
        <ul className={experienceStyles.expList}>
          <li>Provided Manual QA as an Accessibility SME for new projects to ensure that WCAG acceptance criteria were met.</li>
          <li>Took initiative in creating more documentation for engineering and future test automation.</li>
          <li>Conducts regression testing to ensure both existing and new solutions are meeting engineering goals and metrics.</li>
          <li>Designed manual tests and plans for future automation of testing utilizing CI/CD pipeline.</li>
          <li>Helped guide the QA team with bridging the gap between engineering and QA.</li>
          <li>Provided and created accessibility test cases for new features before they hit release.</li>
        </ul>
      <h3>Web Application Developer @ AudioEye</h3>
      <h4>September 2018 - September 2020</h4>
      <p>I was responsible for developing, testing, implementing, and maintaining JavaScript-based fixes for issues of accessibility that existed on client websites.</p>
        <ul className={experienceStyles.expList}>
          <li>Applied Web Content Accessibility Guidelines (WCAG) and WAI-ARIA best practices to client websites to ensure WCAG 2.1 requirements.</li>
          <li>Implemented a multitude of accessible technology solutions for varying client websites.</li>
          <li>Led multiple Fortune 500 client projects and delivered feedback directly to stakeholders.</li>
          <li>Responsible for ensuring multiple fortune 500 websites meet ADA compliance.</li>
          <li>Created more internal documentation for teams and onboarding.</li>
          <li>Deployed performant JavaScript to websites which receive millions of users monthly, (50M+ users/monthly).</li>
          <li>Conducted daily code reviews to ensure consistency and that bugs don’t reach production.</li>
        </ul>
    </div>
    <div className={experienceStyles.container}>
      <h3>Certified Professional in Accessibility Core Competencies (CPACC)</h3>
      <h4>Issued December 2018</h4>
      <p>Certified Professional in Accessibility Core Competencies (CPACC).
      Issuing authority <strong>IAAP - International Association of Accessibility Professionals.</strong></p>
    </div>
  </div>
)

export default Experience
