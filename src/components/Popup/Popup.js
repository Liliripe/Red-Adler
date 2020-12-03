import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'
import { StaticQuery, graphql, Link } from 'gatsby'

import {
  StyledContainer,
  StyledCol,
  StyledText,
  StyledImage,
  Body,
} from './style'

export default function Popup() {
  return (
    <StaticQuery
      query={graphql`
        query Popup {
          popup1: file(relativePath: { eq: "featured/1.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
      `}
      render={(data) => (
        <Modal.Body>
          <StyledContainer fluid>
            <Row>
              <StyledCol xs={12} md={6}>
                <StyledImage
                  Tag="div"
                  className="popup-img"
                  fluid={data.popup1.childImageSharp.fluid}
                />
              </StyledCol>

              <StyledText xs={12} md={6}>
                <Body>
                  <h2>This is a conceptual website.</h2>
                  <hr />
                  <p>&nbsp;</p>
                  <p>
                    This site was created as a portfolio project to demonstrate
                    capabilities in React & Gatsby. Design based on{' '}
                    <Link
                      to="https://rededition.com/en"
                      style={{ textDecoration: 'underline ' }}
                    >
                      Red Edition
                    </Link>
                    .
                  </p>
                  {/* <p>&nbsp;</p> */}
                  {/* <p>
                    Visit my full portfolio at{' '}
                    <Link to="/" style={{ textDecoration: 'underline ' }}>
                      Rossi Studio
                    </Link>
                    .
                  </p> */}
                </Body>
              </StyledText>
            </Row>
          </StyledContainer>
        </Modal.Body>
      )}
    />
  )
}
