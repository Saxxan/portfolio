import React from 'react';
import styled from 'styled-components';

const CardSubtitle = styled.p`
    font-size: 15px;
    font-weight: 500;
    color: var(--font-white);
    padding: 5px;
    width: 100%;
    background: var(--primary);
    @media (min-width: 900px){
        font-size: 20px;
        background: none;
    }
`

export default function ProjectCardSubtitle(props) {

  return (
    <CardSubtitle>{props.subtitle}</CardSubtitle>
  )
}
