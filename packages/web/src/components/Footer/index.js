import React from 'react'
import Typography from '@material-ui/core/Typography'
import { Container, Content, Link } from './style'

const Footer = () => (
  <Container>
    <Content>
      <Typography color={'inherit'} variant={'caption'}>
        ❮❯ by
      </Typography>
      &ensp;
      <Link href='https://github.com/camiloarce' target='_blank'>
        Camilo Arce
      </Link>
      &ensp;
      <Typography color={'inherit'} variant={'caption'}>
        2019
      </Typography>
    </Content>
  </Container>
)

export default Footer
