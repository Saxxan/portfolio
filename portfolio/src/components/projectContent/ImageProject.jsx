import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
    width: 100%;
`

export default function ImageProject(props) {
  return <Image src={props.image} alt="imagen projecto"/>
}
