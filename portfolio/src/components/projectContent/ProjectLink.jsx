import React from 'react';
import styled from 'styled-components';

const LinkToProject = styled.a`
    display: block;
    font-size: 15px;
    padding: 5px 0;
    margin: 0 auto;
    width: 80vw;
    color: inherit;
    &:last-of-type {
        margin: 0 auto 50px auto;
    }
    @media (min-width: 900px) {
        font-size: 18px;
    }
`

export default function ProjectLink(props) {
  return <LinkToProject href={props.link}>{props.text}</LinkToProject>
}
