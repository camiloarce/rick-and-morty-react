import styled from 'styled-components'
import CardMUI from '@material-ui/core/Card'
import CardContentMUI from '@material-ui/core/CardContent'
import CardMediaMUI from '@material-ui/core/CardMedia'
import TypographyMUI from '@material-ui/core/Typography'

export const Card = styled(CardMUI)`
  && {
    border-radius: 7px;
    max-width: 250px;
  }
`

export const CardContent = styled(CardContentMUI)`
  background-color: #2f3250;
`

export const CardMedia = styled(CardMediaMUI)`
  height: 230px;
`

export const Row = styled.div`
  align-items: center;
  border-bottom: 1px solid #524f59;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 0.75rem 0px 0.375rem;
`

export const Text = styled(TypographyMUI).attrs({
  variant: 'caption'
})`
  && {
    color: #fb004d;
    font-weight: 300;
  }
`

export const Typography = styled(TypographyMUI)`
  && {
    color: ${({ colour }) => colour || '#FFFFFF'};
  }
`
