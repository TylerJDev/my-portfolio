import { Link } from "gatsby"
import React from "react"
import aboutStyles from "./about.module.scss"

const AboutBio = () => (
  <div className={aboutStyles.about}>
    <div>
      <h2>A little about me</h2>
      <p> Stemming from a love of art, building, and those tiny lego pieces you would lose in a day, I always wanted to be a creator, a designer, and foremost to be able to learn something new everyday. 
        Today, I'm a Web Developer, driven by a love of learning. I have skills in various areas, and I'm not afraid to build something new.
        So come on and say hello!
      </p>
      <Link to="/about">Read more about me &#8594;</Link>
    </div>
  </div>
)

export default AboutBio
