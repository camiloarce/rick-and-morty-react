import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { Container, Content } from './style'

const Brand = ({ subtitle }) => (
  <Container>
    <Content>
      <Typography color={'inherit'} variant={'h4'}>
        Rick and Morty ReactJS
      </Typography>
      <Typography color={'inherit'} variant={'h5'}>
        {subtitle}
      </Typography>
    </Content>
  </Container>
)

Brand.propTypes = {
  subtitle: PropTypes.string.isRequired
}

export default Brand
