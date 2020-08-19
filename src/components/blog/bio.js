import React from "react"
import bioStyles from "./bio.module.scss"

const Bio = () => {
  return (
    <div className={bioStyles.bio}>
      <h1>Blog</h1>
      <h2 className="bio__title">Hi I'm Tyler, I like to make posts about things I've learnt.</h2>
      <h2 className="bio__title">Expect to find things about a11y, JavaScript, and web development in general.</h2>
    </div>
  )
}

export default Bio
