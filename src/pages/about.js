import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <div id="about">
        <div id="banner" className="container about__banner">
          <h1>About</h1>
          <h2>You'd like to know about me? I'm flattered.</h2>
        </div>

        <div id="aboutMe">
          <p>Stemming from a love of art, building, and those tiny lego pieces you would lose in a day, I always wanted to be a creator, a designer, and foremost to be able to learn something new everyday. 
            Today, I'm a Web Developer, driven by a love of learning. I have skills in various areas, and I'm not afraid to build something new.
            
            So come on and say hello!
          </p>

          <h2>What I know</h2>
          <p>I love learning new things. Since web development is a vast and growing ecosystem of technology, you could say it was perfect for me. 
             I have a few skills now that I can say that I'm proficient in, but I'm a quick learner and able to take on new things!
          </p>
        </div>

        <div id="contact">
          <h2>Contact</h2>
          <p>You can find me all over the web.</p>
          <div id="social">
            <a href="mailto:tylerjdev@gmail.com?subject=Inquire%20About">Email</a>
            <a href="https://www.linkedin.com/in/tyjdev/">LinkedIn</a>
            <a href="https://github.com/TylerJDev">Github</a>
          </div>
        </div>
    </div>
  </Layout>
)

export default AboutPage
