import React, { useState } from 'react'
import Img from 'gatsby-image'

import Popup from '../Popup'
import { StyledCol, StyledLink, Title, StyledModal } from './style'

const Product = ({ cover, path, title }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <StyledCol xs={6} md={4}>
        <StyledLink onClick={handleShow}>
          <Img fluid={cover} />
          <Title>{title}</Title>
        </StyledLink>
      </StyledCol>
  
        <StyledModal show={show} onHide={handleClose}>
          <Popup />
        </StyledModal>
    </>
  )
}

export default Product
