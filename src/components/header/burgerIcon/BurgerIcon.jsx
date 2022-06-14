import React from 'react'
import styled from 'styled-components';

const IconBurger = styled.svg`
  width: 30px;
  height: 23px;
  fill: var(--primary);
  @media (min-width: 900px){
    display: none;
  }
`

export default function BurgerIcon(props) {
  return (
    <IconBurger onClick={props.onClick} width="46" height="46" viewBox="0 0 46 46" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="36" width="26" height="10"/>
      <rect width="26" height="10"/>
      <rect y="18" width="46" height="10"/>
    </IconBurger>
  )
}
