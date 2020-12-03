import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <div className="siteContent">
        {children}
      </div>
      <GlobalStyle />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
