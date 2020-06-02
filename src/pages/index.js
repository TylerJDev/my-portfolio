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
      <h2>Hi there! I'm a web developer, with a knack for accessibility!<br/></h2>

      <div id="banner__bg"></div>
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
