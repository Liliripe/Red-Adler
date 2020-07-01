import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { Background, Text, Title, StyledLink, StyledSlider, Slide, SlideText } from './style'

export default function New() {
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
  }

  return (
    <StaticQuery
      query={graphql`
        query New {
          new1: file(relativePath: { eq: "new/1.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 950) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
          new2: file(relativePath: { eq: "new/2.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 950) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
          new3: file(relativePath: { eq: "new/3.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 950) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
          new4: file(relativePath: { eq: "new/4.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 950) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
          new5: file(relativePath: { eq: "new/5.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 950) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
      `}
      render={(data) => (
        <Background
          data-scroll
          data-scroll-speed="1"
          data-scroll-position="top"
        >
          <Text>
            <Title>
              I have been passionate about <span>creating</span> simple,
              <span>beautiful,</span> & colorful furniture <span>designs</span>
            </Title>
            <StyledLink to="/">Discover our history</StyledLink>
          </Text>

          <StyledSlider {...settings}>
            <Slide>
              <BackgroundImage
                fadeIn
                Tag="div"
                className="new-image"
                fluid={data.new1.childImageSharp.fluid}
              >
                <SlideText>Bedframe</SlideText>
              </BackgroundImage>
            </Slide>
            <Slide>
              <BackgroundImage
                fadeIn
                Tag="div"
                className="new-image"
                fluid={data.new2.childImageSharp.fluid}
              >
                <SlideText>Horizon Large Console</SlideText>
              </BackgroundImage>
            </Slide>
            <Slide>
              <BackgroundImage
                fadeIn
                Tag="div"
                className="new-image"
                fluid={data.new3.childImageSharp.fluid}
              >
                <SlideText>Lofts & Attics</SlideText>
              </BackgroundImage>
            </Slide>
            <Slide>
              <BackgroundImage
                fadeIn
                Tag="div"
                className="new-image"
                fluid={data.new4.childImageSharp.fluid}
              >
                <SlideText>Kitchens</SlideText>
              </BackgroundImage>
            </Slide>
            <Slide>
              <BackgroundImage
                fadeIn
                Tag="div"
                className="new-image"
                fluid={data.new5.childImageSharp.fluid}
              >
                <SlideText>Cane Sofa 260</SlideText>
              </BackgroundImage>
            </Slide>
          </StyledSlider>
        </Background>
      )}
    />
  )
}
