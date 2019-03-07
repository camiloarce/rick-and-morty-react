import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardContent, CardMedia, Row, Text, Typography } from './style'

const CardDetail = ({
  id,
  image,
  gender,
  location,
  name,
  origin,
  species,
  status,
  created
}) => (
  <Card>
    <CardMedia image={image} title={name} alt={name} />
    <CardContent>
      <Typography variant={'subtitle1'}>{name}</Typography>
      <Typography colour={'#e0e0e0'} variant={'caption'} gutterBottom>
        {`id: ${id}`}
      </Typography>
      <Row>
        <Text>STATUS</Text>
        <Typography align={'right'} variant={'subtitle2'}>
          {status}
        </Typography>
      </Row>
      <Row>
        <Text>SPECIES</Text>
        <Typography align={'right'} variant={'subtitle2'}>
          {species}
        </Typography>
      </Row>
      <Row>
        <Text>GENDER</Text>
        <Typography align={'right'} variant={'subtitle2'}>
          {gender}
        </Typography>
      </Row>
      <Row>
        <Text>ORIGIN</Text>
        <Typography align={'right'} variant={'subtitle2'}>
          {origin}
        </Typography>
      </Row>
      <Row>
        <Text>LAST LOCATION</Text>
        <Typography align={'right'} variant={'subtitle2'}>
          {location}
        </Typography>
      </Row>
    </CardContent>
  </Card>
)

CardDetail.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  created: PropTypes.string
}

export default CardDetail
