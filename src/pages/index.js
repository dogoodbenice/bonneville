import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/SEO"
import BlogItem from "../components/BlogItem"
import styled from "styled-components"
import Banner from "../components/Banner"

const FeaturedItems = styled.h4`
  font-size: 1.2rem;
  color:rgb(0, 0, 0);
`

export default ({ data }) => {
  const { BlogPostQuery } = data
  return (
    <>
      <Seo />
      <Banner
        content="Hello, this is the website of Suraj Rai. I'm interested in learning and making new things for people."
      />
      <FeaturedItems>You may like to explore some of <a href="/journal">my latest thinking and writing</a>.</FeaturedItems>
      {BlogPostQuery.edges.map(({ node }, index) => (
        <BlogItem nodeObj={node} index={index} />
      ))}
    </>
  )
}

export const query = graphql`
  query {
    BlogPostQuery: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMMM DD, YY")
            path
            featuredImage {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            featuredImageAlt
          }
          excerpt
        }
      }
    }
  }
`
