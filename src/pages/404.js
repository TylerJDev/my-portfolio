import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <div id="fourohfour">
        <h1>404 - Not Found</h1>
        <p>Let's turn that frown upside down... <Link to="/">Back to Home Page</Link></p>
      </div>
    </Layout>
  )
}

// Redirect until page is indexed
if (window.location.pathname === '/2020-08-20-the-difference-between-aria-label-aria-labelledby-and-aria-describedby/') {
  window.location.replace('/the-difference-between-aria-label-aria-labelledby-and-aria-describedby/');
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
