import React from 'react'
import { storiesOf } from '@storybook/react'
import { Header, Footer } from 'rick-and-morty-react-ui-core'

storiesOf('Containers', module)
  .add('Header', () => <Header search />)
  .add('Footer', () => <Footer />)
