import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  position: relative;
  margin-left: 0;
  margin-right: 16px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.15);
  @media (min-width: 600px) {
    width: auto;
    margin-left: 24px;
  }
`

export const Icon = styled.div`
  width: 72px;
  height: 100%;
  display: flex;
  position: absolute;
  align-items: center;
  pointer-events: none;
  justify-content: center;
`
