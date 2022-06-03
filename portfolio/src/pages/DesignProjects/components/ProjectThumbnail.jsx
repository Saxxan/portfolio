import React from 'react';
import styled from 'styled-components';

const ThumbImage = styled.img`
  margin: 0 auto;
`

export default function ProjectThumbnail(props) {
  return <ThumbImage src={props.image}/>
}
