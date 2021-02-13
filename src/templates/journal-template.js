import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/SEO"
import BlogItem from "../components/BlogItem"
import Button from "../components/Button"
import { PagerStyles } from "../styles/JournalStyles"
import Banner from "../components/Banner"

const JournalTemplate = props => {
  const { edges } = props.data.allMarkdownRemark

  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()

  return (
    <>
      <SEO title="Some of Suraj's latest thoughts and explorations" />
      <Banner content="Journal" />
      <p>
        {" "}
        These are some articles I've written.
      </p>
      <p>
        Topics I often explore are <a href="/tags/culture">culture</a>, <a href="/tags/science">science</a>, <a href="/tags/art">art</a>, <a href="/tags/data">data</a>, <a href="/tags/technology">technology</a> and <a href="/tags/productivity">productivity</a>. There maybe additional tags on articles which you are welcome to explore.
      </p>
      <p>
        Some are <a href="/tags/longform">long</a>, some are <a href="/tags/longform">short</a>, you may also be interested in some of my <a href="https://blog.logikblok.com/">historic writing</a>.
      </p>
      <p>
        Feedback is always <a href="/contact">appreciated</a>.
      </p>
      {edges.map(({ node }, index) => {
        return <BlogItem nodeObj={node} index={index} />
      })}
      {/* Paging controls
        If there are multiple pages, show pager */}
      {numPages > 1 && (
        <PagerStyles>
          <div className="btns">
            {!isFirst && (
              <Link to={`/journal/${prevPage}`} rel="prev">
                <Button text="Previous" />
              </Link>
            )}
            {!isLast && (
              <Link to={`/journal/${nextPage}`} rel="next">
                <Button text="Next" />
              </Link>
            )}
          </div>
          <div className="numbers">
            {Array.from({ length: numPages }, (_, i) => (
              <Link
                key={`pagination-numbers${i + 1}`}
                to={`/journal/${i === 0 ? "" : i + 1}`}
              >
                {i + 1}
              </Link>
            ))}
          </div>
        </PagerStyles>
      )}
    </>
  )
}

export default JournalTemplate

export const journalQuery = graphql`
  query journalQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMMM DD, YY")
            path
            tags
            featuredImage {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`
