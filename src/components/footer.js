import { Link } from "gatsby"
import React from "react"
import footerStyles from "./footer.module.scss"

const Footer = () => (
  <footer className={footerStyles.header}>
        <div className={footerStyles['footerNav_left']}>
            Made with bread
            <span aria-hidden="true">&#127838;</span> 
            by Tyler
        </div>
        <div>
          Developed with Gatsby, deployed on Netlify
        </div>
        <div className={footerStyles['footerNav_right']}>
            <Link to="/projects">Projects</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
        </div>
  </footer>
)

export default Footer
