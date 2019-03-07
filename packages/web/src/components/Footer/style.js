import styled from 'styled-components'

export const Container = styled.footer`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: nowrap;
  color: rgb(158, 158, 158);
  width: 100%;
  min-height: calc(5rem);
  background: rgb(32, 35, 41);
  padding: 10px 0px;
`

export const Content = styled.div`
  align-items: center;
  display: flex;
`

export const Link = styled.a`
  font-weight: 400;
  font-size: 0.875rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  color: rgb(245, 245, 245);
  transition: color 0.2s ease 0s;
  border-bottom: 1px solid #fb004d;
  text-decoration: none;
`
