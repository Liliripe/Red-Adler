import React, { useEffect } from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import locomotiveScroll from 'locomotive-scroll'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import SEO from '../helpers/seo'

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark

  const scrollRef = React.createRef()
  useEffect(() => {
    const scroll = new locomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    })
  })

  return (
    <div className="scroll" ref={scrollRef}>
      <SEO title="Home" />
      test
    </div>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      limit: 6
      sort: { order: ASC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            tags
            date(formatString: "MM.DD.YYYY")
            cover {
              childImageSharp {
                fluid(
                  maxWidth: 1000
                  quality: 90
                  traceSVG: { color: "#f2f2f2" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
