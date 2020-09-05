import React, { Component } from 'react';
import { StaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class NotFoundPage extends Component {
  componentDidMount() {
    // Redirect until page is indexed
    if (window.location.pathname === '/2020-08-20-the-difference-between-aria-label-aria-labelledby-and-aria-describedby/') {
      window.location.replace('/the-difference-between-aria-label-aria-labelledby-and-aria-describedby/');
    }
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => 
          <Layout location={this.props.location} title={data.site.siteMetadata.title}>
            <SEO title="404: Not Found" />
            <div id="fourohfour">
              <h1>404 - Not Found</h1>
              <p>Let's turn that frown upside down... <Link to="/">Back to Home Page</Link></p>
            </div>
          </Layout>
        }
      />
      
    )
  }
}

export default NotFoundPage