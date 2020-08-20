import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutBio from "../components/main/about-bio"
import RecentPosts from "../components/main/recent-posts"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div id="banner" className="container">
      <h1>Hello, my name is Tyler</h1>
      <h2>Hi there! I'm a web developer, with a knack for building!<br/>
      I specialize in <strong>Front-End Development</strong>, <strong>Accessibility</strong> and <strong>Test Driven Development.</strong></h2>

      <div id="banner__bg">
        <div id="banner_moon"></div>
      </div>
    </div>

    <div id="aboutBio" className="container">
      <AboutBio/>
    </div>
    
    <div id="recentPosts" className="container">
      <RecentPosts/>
    </div>
  </Layout>
)

export default IndexPage
