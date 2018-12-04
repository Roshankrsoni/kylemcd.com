import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'

import Layout from '../../components/Layout'

import Logo  from '../../components/Logo';
import Footer from '../../components/Footer';
import TwitterCta from '../../components/TwitterCta';

import {
  ImageContainer,
  BlogContainer,
  BlogDateContainer,
  BlogDate,
  BlogTitle, 
  BlogAuthor,
  BlogContent
} from '../../components/BlogStyles';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = post.excerpt
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        >
          <style>{` body { font-family: Arial, sans-serif; margin: 0 !important }`}</style>
          <meta charset="UTF-8" />
          <meta name="description" content="Kyle McDonald's Personal Site" />
          <meta name="keywords" content="Maker, HTML, Developer, Engineer" />
          <meta name="author" content="Kyle McDonald" />
          <meta property="og:title" content={`${post.frontmatter.title}`} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://kylemcd.com" />
          <meta property="og:image" content={post.frontmatter.bg}  />
        </Helmet>
        <Logo/>
        <ImageContainer image={post.frontmatter.bg}/>
        <BlogContainer>
          <BlogDateContainer>
            <BlogDate>
              {post.frontmatter.date}
            </BlogDate>
          </BlogDateContainer>
          <BlogTitle>
            {post.frontmatter.title}
          </BlogTitle>
          <BlogAuthor>
            {this.props.data.site.siteMetadata.author}
          </BlogAuthor>
          <BlogContent  dangerouslySetInnerHTML={{ __html: post.html }} />           
          <TwitterCta/>
        </BlogContainer>
        <Footer/>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        bg
      }
    }
  }
`
