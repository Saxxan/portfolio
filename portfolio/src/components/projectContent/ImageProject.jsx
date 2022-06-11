import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 90vw;
  margin: 0 auto;
  padding: 10px;
`

export default function ImageProject(props) {
  return <Image src={props.image}/>
}
