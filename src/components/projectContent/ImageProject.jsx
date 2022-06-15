import React from 'react';
import styled from 'styled-components';

const ImageBig = styled.img`
  display: block;
  width: 70vw;
  margin: 40px auto;
`

const ImageSmall = styled.img`
  width: ${props => props.ancho};
  display: block;
  margin: 30px auto;
  @media (min-width: 900px) {
    margin: 30px; 
  }
  @media (min-width: 1200px) {
    margin: 10px;
  }
`

export default function ImageProject(props) {
  return props.class === 'big' ? <ImageBig src={props.image}/>  : <ImageSmall ancho={props.ancho} src={props.image}/>
}
