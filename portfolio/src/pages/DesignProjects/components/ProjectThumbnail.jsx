import React from 'react';
import styled from 'styled-components';

const ThumbImage = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  width: 100%;
  height: 93%;
  border-radius: 10px;
  background-image: url('${props => props.thumbnail}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

export default function ProjectThumbnail(props) {
  return <ThumbImage thumbnail={props.thumbnail}/>
}
