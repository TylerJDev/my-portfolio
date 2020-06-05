import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/blog/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import blogStyles from "./blog.module.scss"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext
  const postAuthor = 'Tyler Jones'; // Placeholder value

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article className={blogStyles.article + ' blogPost__article'}>
        <header className={blogStyles.article_heading}>
          <div className={blogStyles.inner_header}>
            <h1>
              {post.frontmatter.title}
            </h1>

            <div className={blogStyles.side_header}>
              <p>
                <strong>{post.frontmatter.date}</strong> | By {postAuthor}
                <br/>
                {post.frontmatter.tags !== null &&
                  <span>
                   <strong>Tags:</strong> <span className={blogStyles.tags}>{post.frontmatter.tags.join(', ')}</span>
                  </span>
                }
                </p>
            </div>
          </div>

          <div>
            <h2 className={blogStyles.sub_heading}>{post.frontmatter.description}</h2>
          </div>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>

      <nav aria-label="pagination"> 
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev" className={blogStyles.nextPrevLink}>
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next" className={blogStyles.nextPrevLink}>
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
    }
  }
`
