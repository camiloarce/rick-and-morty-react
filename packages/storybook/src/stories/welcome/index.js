import React from 'react'
import { storiesOf } from '@storybook/react'
import { linkTo } from '@storybook/addon-links'
import { Brand } from 'rick-and-morty-react-ui-core'
import Welcome from '../../components/Welcome'

storiesOf('Welcome', module)
  .add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)
  .add('Brand page', () => <Brand subtitle={'Characters list'} />)
