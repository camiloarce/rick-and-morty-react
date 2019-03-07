import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'
import { Container, Icon } from './style'

const styles = theme => ({
  inputRoot: {
    color: 'inherit',
    width: '100%'
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200
    }
  }
})

class SearchBar extends React.Component {
  render () {
    const { classes, ...inputProps } = this.props
    return (
      <Container>
        <Icon>
          <SearchIcon />
        </Icon>
        <InputBase
          {...inputProps}
          placeholder='Search…'
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
        />
      </Container>
    )
  }
}

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SearchBar)
