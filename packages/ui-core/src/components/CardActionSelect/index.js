import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardActionArea, CardMedia, Overlay, TitleSection } from './style'

const CardActionSelect = ({ image, selected, title, ...buttonProps }) => (
  <Card>
    <CardActionArea {...buttonProps}>
      <CardMedia image={image} title={'Hold click to select'} alt={title} />
      <TitleSection>{title}</TitleSection>
      {selected && <Overlay />}
    </CardActionArea>
  </Card>
)

CardActionSelect.defaultProps = {
  selected: false
}

CardActionSelect.propTypes = {
  image: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired
}

export default CardActionSelect
