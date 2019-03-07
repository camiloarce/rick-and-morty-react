import styled from 'styled-components'
import CardMUI from '@material-ui/core/Card'
import CardActionAreaMUI from '@material-ui/core/CardActionArea'
import CardMediaMUI from '@material-ui/core/CardMedia'

export const Card = styled(CardMUI)`
  && {
    background-color: transparent;
    border-radius: 7px;
    max-width: 250px;
  }
`

export const CardActionArea = styled(CardActionAreaMUI)``

export const CardMedia = styled(CardMediaMUI)`
  height: 200px;
`

export const Overlay = styled.div`
  opacity: 0.4;
  display: block;
  position: absolute;
  overflow: hidden;
  border-radius: inherit;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  pointer-events: none;
  z-index: 0;
  background-color: #D00947;
  transition: all 1.1s ease-in-out;
`

export const TitleSection = styled.div`
  background: rgb(32, 35, 41);
  bottom: 0px;
  color: white;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-size: 1rem;
  opacity: 0.8;
  padding: 0.625rem;
  position: absolute;
  width: 100%;
  z-index: 9999;
`
