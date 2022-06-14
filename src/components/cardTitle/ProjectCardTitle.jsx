import React from 'react';
import styled from 'styled-components';

const CardTitle = styled.h3`
    color: var(--font-white);
    font-size: 17px;
    font-weight: 500;
    padding: 5px;
    width: 100%;
    margin: 0 auto;
    align-self: flex-start;
    background: var(--primary);
    @media (min-width: 900px) {
        font-size: 25px;
        padding: 10px 20px;
        background: none;
    }
`

export default function ProjectCardTitle(props) {

  return (
    <CardTitle>{props.title}</CardTitle>
  )
}
