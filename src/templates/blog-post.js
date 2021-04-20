import * as React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'


const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || 'Title'
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        titleTemplate={`%s | ${siteTitle}`}
        description={post.frontmatter.description || post.excerpt}
        ogType="article"
        ogImage={post.frontmatter.ogImage}
        twitterImage={post.frontmatter.twitterImage}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p className="post-data">
            {post.frontmatter.date}
            <br />
            {post.frontmatter.author}
          </p>
        </header>
        <hr />
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        NEWSLETTER
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            listStyle: 'none'
          }}
        >
          <li className={`${previous ? '' : 'nav-empty'}`}>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                <small>Previous</small>
                <br />
                <strong>
                  « {previous.frontmatter.title}
                </strong>
              </Link>
            )}
          </li>
          <li className={`${next ? '' : 'nav-empty'}`}>
            {next && (
              <Link to={next.fields.slug} rel="next">
                <small>Next</small>
                <br />
                <strong>
                  {next.frontmatter.title} »
                </strong>
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
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        author
        description
        ogImage
        twitterImage
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
