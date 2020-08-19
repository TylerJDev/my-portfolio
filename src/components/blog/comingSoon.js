import { StaticQuery, graphql } from "gatsby"
import React from "react"
import soonStyles from "./soon.module.scss"
import ComingSoonArticles from './comingSoonArticles'

const ComingSoon = () => {
  return (
    <div className={soonStyles.bio}>
      <h2>Upcoming</h2>
      <ComingSoonArticles/>
    </div>
  )
}

export default ComingSoon
