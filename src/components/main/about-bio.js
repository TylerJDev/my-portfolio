import { Link } from "gatsby"
import React from "react"
import aboutStyles from "./about.module.scss"

const AboutBio = () => (
  <div className={aboutStyles.about}>
    <div>
      <h2>A little about me</h2>
      <p>I love building and learning, it's a part of the reason why I'm a web developer.
        With the vastness that is web development, I enjoy trying out new things which may improve my workflow, or to get a better perspective. Things like making sure something is accessible for all is always key when I'm building for the web.
        With that being said, <strong>come on and say hello!</strong>
      </p>
      <Link to="/about">Read more about me &#8594;</Link>
    </div>
  </div>
)

export default AboutBio
