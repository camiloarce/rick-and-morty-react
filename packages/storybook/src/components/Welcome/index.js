import React from 'react'
import PropTypes from 'prop-types'

const Main = props => (
  <article
    {...props}
    style={{
      margin: 15,
      maxWidth: 600,
      lineHeight: 1.4,
      fontFamily:
        '"Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans, sans-serif'
    }}
  />
)

const Title = ({ children, ...props }) => (
  <h1
    style={{
      color: '#2276cf',
      fontSize: '1.6rem',
      paddingBottom: 2,
      textDecoration: 'none'
    }}
    {...props}
  >
    {children}
  </h1>
)

const Welcome = ({ showApp }) => (
  <Main>
    <Title>Welcome to Rick and Morty React UI storybook</Title>
    <p>
      A reusable component library that is designed and engineered to help us
      build better product faster.
    </p>
  </Main>
)

Title.propTypes = {
  children: PropTypes.node
}

Welcome.displayName = 'Welcome'

Welcome.propTypes = {
  showApp: PropTypes.func
}
Welcome.defaultProps = {
  showApp: null
}

export default Welcome
