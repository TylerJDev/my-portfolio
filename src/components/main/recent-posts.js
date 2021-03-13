import React from "react"
import { Link, StaticQuery } from "gatsby"
import recentPostStyles from "./recentPosts.module.scss"

const RecentPosts = () => (
    <StaticQuery
    query={graphql`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            id
            excerpt(pruneLength: 250)
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
            }
          }
        }
      }
    }
  `}
    render={data => (
      <div className={recentPostStyles.recentPosts}>
          <h2>Blog</h2>
          <h3 className="sub-blog">Where I like to talk about accessibility, Frontend Development, TDD, JavaScript and a lot more!</h3>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div className="blog__post-container" key={node.id}>
              <Link to={`/${node.fields.slug}`} className="blog__post">
                <h4>{node.frontmatter.title}</h4>
                <p>{node.excerpt}</p>
              </Link>
              <p className={recentPostStyles["recent"]}>Date: {node.frontmatter.date}</p>
            </div>
          ))}
      </div>
    )}
  />
)

export default RecentPosts