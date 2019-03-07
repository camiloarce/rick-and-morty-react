import React from 'react'
import { storiesOf } from '@storybook/react'
import { CardActionSelect, CardDetail } from 'rick-and-morty-react-ui-core'

storiesOf('Cards', module)
  .add('Basic Card Action', () => {
    class StoryComponent extends React.Component {
      constructor (props) {
        super(props)
        this.state = {
          selected: null,
          longPress: false
        }
      }

      clearTimer = timer => {
        if (timer !== null) {
          clearTimeout(this.timer)
          this.timer = null
        }
      }

      onLongPress = (event, id) => {
        if (event.type === 'click' && event.button !== 0) {
          return
        }

        this.setState({ longPress: false })

        if (this.timer === null) {
          this.timer = setTimeout(() => {
            if (this.state.selected === id) {
              this.setState({ selected: null })
            } else {
              this.setState({ selected: id })
            }
            this.setState({ longPress: true })
          }, 1000)
        }

        return false
      }

      onRelease = () => {
        this.clearTimer(this.timer)
      }

      onTap = id => {
        const { longPress, selected } = this.state
        this.clearTimer(this.timer)

        if (longPress) {
          return false
        }

        if (selected === id) {
          this.setState({ selected: null })
        } else {
          console.log('tap', id)
        }
      }

      render () {
        const id = 1
        const { selected } = this.state
        return (
          <CardActionSelect
            image={'https://rickandmortyapi.com/api/character/avatar/361.jpeg'}
            title={'Toxic Rick'}
            selected={selected === id}
            onClick={() => this.onTap(id)}
            onTouchStart={event => this.onLongPress(event, id)}
            onTouchEnd={this.onRelease}
            onMouseDown={event => this.onLongPress(event, id)}
            onMouseUp={this.onRelease}
            onMouseLeave={this.onRelease}
          />
        )
      }
    }
    return <StoryComponent />
  })
  .add('Character detail card', () => (
    <CardDetail
      id={1}
      image={'https://rickandmortyapi.com/api/character/avatar/232.jpeg'}
      gender={'Male'}
      location={`Earth (Evil Rick's Target Dimension)`}
      name={'Morty Smith'}
      origin={`Earth (Evil Rick's Target Dimension)`}
      species={'Human'}
      status={'Alive'}
    />
  ))
