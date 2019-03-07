import React from 'react'
import PropTypes from 'prop-types'
import FabMUI from '@material-ui/core/Fab'
import { Icon } from './style'

const Fab = ({ children, ...buttonProps }) => (
  <FabMUI variant='extended' aria-label='Delete' {...buttonProps}>
    {children}
    <Icon />
  </FabMUI>
)

Fab.propTypes = {
  children: PropTypes.node
}

export default Fab
