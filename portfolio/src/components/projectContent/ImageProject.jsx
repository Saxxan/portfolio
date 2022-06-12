import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 90vw;
  display: block;
  margin: 10px auto;
`

export default function ImageProject(props) {
  return <Image src={props.image}/>
}
