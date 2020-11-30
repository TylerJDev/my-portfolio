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
          <p>Hello there! My name is Tyler! Professionally I'm a web developer and I love crafting up new solutions.
            I enjoy learning, which with web development the limit is the moon.
            <br/>
            <br/>
            I also enjoy making things accessible. Unfortunately, a large part of the web is inaccessible in some shape or form. I try my best to create the most accessible products possible.
            I firmly believe that the web should be accessible to all.
            <br/>
            <br/>
          </p>
        </div>

        <div id="contact">
          <h2>Contact</h2>
          <p>You can find me all over the web.</p>
          <div id="social">
            <a href="mailto:tylerjdev@gmail.com?subject=Inquire%20About">Email</a>
            <a href="https://www.linkedin.com/in/tyjdev/">LinkedIn</a>
            <a href="https://github.com/TylerJDev">Github</a>
            <a href="https://codepen.io/TylerJDev">CodePen</a>
          </div>
        </div>
    </div>
  </Layout>
)

export default AboutPage
