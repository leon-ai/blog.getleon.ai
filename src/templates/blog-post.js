import * as React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'


const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || 'Title'
  const { previous, next } = data
  const authorImg = `/images/authors/${post.frontmatter.author.toLowerCase().split(' ').join('_')}.png`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        titleTemplate={`%s | ${siteTitle}`}
        description={post.frontmatter.description || post.excerpt}
        ogType="article"
        ogImage={`${data.site.siteMetadata.siteUrl}/images/social${location.pathname.slice(0, -1)}-og_social_card.png`}
        twitterImage={`${data.site.siteMetadata.siteUrl}/images/social${location.pathname.slice(0, -1)}-twitter_social_card.png`}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p className="post-data">
            <img src={authorImg} alt={post.frontmatter.author} /> {post.frontmatter.author} / {post.frontmatter.date}
          </p>
        </header>
        <hr />
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <div className="edit-or-share-container">
          <ul>
            <li><a href={`https://twitter.com/intent/tweet?source=webclient&original_referer=${location.href}&text=${post.frontmatter.title}&url=${location.href}&via=louistiti_fr`} target="_blank" rel="noreferrer">Share on Twitter</a></li>
            <li><a href={`https://github.com/leon-ai/blog.getleon.ai/edit/master/content/blog${location.pathname}/index.md`} target="_blank" rel="noreferrer">Edit on GitHub</a></li>
          </ul>
        </div>
        <div className="newsletter-container">
          <div className="newsletter-info">
            <h2>
              Join the Journey
            </h2>
            <p>
              Get the latest news from Leon, your open-source personal assistant.
            </p>
            <p>
              <em>
                No spam. Unsubscribe at any time.
              </em>
            </p>
            <img src="/images/newsletter.png" width={56} alt="Newsletter" />
          </div>
          <div className="newsletter-form-container">
            <form action="https://www.getrevue.co/profile/leon/add_subscriber" method="post" target="_blank">
              <input type="email" required spellCheck="false" placeholder="john.doe@example.com" name="member[email]" />
              <button type="submit" name="member[subscribe]">Stay updated</button>
            </form>
          </div>
        </div>
        <br />
        <p>Cheers <span role="img" aria-label="Cocktail">🍹</span>,</p>
        <p><em>{post.frontmatter.author.split(' ')[0]}</em>.</p>
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
        siteUrl
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
