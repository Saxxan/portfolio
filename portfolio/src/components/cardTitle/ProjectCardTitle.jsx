import React from 'react';
import styled from 'styled-components';

const CardTitle = styled.h3`
    font-size: 17px;
    font-weight: 500;
    padding: 5px;
    align-self: flex-start;
    @media (min-width: 900px) {
        font-size: 25px;
        padding: 10px 20px;
    }
`

export default function ProjectCardTitle(props) {

  return (
    <CardTitle>{props.title}</CardTitle>
  )
}
