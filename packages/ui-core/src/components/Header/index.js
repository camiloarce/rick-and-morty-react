import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import SvgIcon from '@material-ui/core/SvgIcon'
import Toolbar from '@material-ui/core/Toolbar'
import { AppBar, Container, Grow } from './style'
import SearchBar from '../SearchBar'

const Header = ({ search, ...inputProps }) => (
  <Container>
    <AppBar position='static'>
      <Toolbar>
        <Button color='inherit' href='/'>
          Home
        </Button>
        {search && <SearchBar {...inputProps} />}
        <Grow />
        <IconButton
          color='inherit'
          href='https://github.com/camiloarce'
          target='_blank'
        >
          <SvgIcon>
            <path d='M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3' />
          </SvgIcon>
        </IconButton>
      </Toolbar>
    </AppBar>
  </Container>
)

Header.propTypes = {
  search: PropTypes.bool
}

export default Header
