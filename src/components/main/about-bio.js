import { Link } from "gatsby"
import React from "react"
import aboutStyles from "./about.module.scss"

const AboutBio = () => (
  <div className={aboutStyles.about}>
    <div>
      <h2>A little about me</h2>
      <p>I love building and learning, which is part of the reason for being a web developer. Building <strong>accessible web applications</strong> is and will forever be a must when building for the web.
        With the vastness that is Web Development, I enjoy trying out new things which may improve my workflow, or to get a better perspective.
        With that being said, <strong>come on and say hello!</strong>
      </p>
      <Link to="/about">Read more about me &#8594;</Link>
    </div>
  </div>
)

export default AboutBio
