/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header/header.js"
import Footer from "./footer"
import "./layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  
  const focusMain = () => {
    const mainElem = document.querySelector('main');

    mainElem.setAttribute('tabindex', '0');
    mainElem.focus();

    /* Add event listener */
    mainElem.addEventListener('focusout', () => {
      mainElem.removeAttribute('tabindex');
    })
  }

  return (
    <>
    <button id="skip-to-main" onClick={focusMain}>Skip to Main Content</button>
    <div id="prefer"></div>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="main__container"
        style={{
          margin: `0 auto`,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
