import React from 'react'
import PropTypes from 'prop-types'
import { ButtonMUI } from './style'

const Button = ({ children, ...buttonProps }) => (
  <ButtonMUI {...buttonProps}>{children}</ButtonMUI>
)

Button.propTypes = {
  children: PropTypes.node.isRequired
}

export default Button
