import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <div id="tagsPage">
      <Helmet title={title} />
      <div>
        <h1>Tags</h1>
        <div id="tags__container">
          {group.map((tag, index) => (
            <div className="tag_container">
              <h2>
                <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                  {tag.fieldValue} ({tag.totalCount})
                </Link>
              </h2>

              <ul>
                {tag.nodes.slice(0, 3).map((post, idx) => (
                  <li>
                    <Link to={tag.edges[0].node.fields.slug}>{post.frontmatter.title}</Link>
                  </li>
                ))}
              </ul>
              {tag.nodes.length > 3 &&
                <Link to="/blog" className="seeMorePosts">See more</Link>
              }
            </div>
          ))}
          
          {/* {JSON.stringify(tag.nodes)} */}
        </div>
      </div>
    </div>
  </Layout>
)

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
        nodes {
          frontmatter {
            description
            title
            date
          }
        }
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  }
`