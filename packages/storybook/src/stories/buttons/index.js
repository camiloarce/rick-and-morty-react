import React from 'react'
import { storiesOf } from '@storybook/react'
import { Button, Fab } from 'rick-and-morty-react-ui-core'

storiesOf('Buttons', module)
  .add('Basic', () => <Button>Basic Button</Button>)
  .add('Fab', () => <Fab>Selected characters: 5</Fab>)
