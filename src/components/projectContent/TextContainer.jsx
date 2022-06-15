import React from 'react';
import styled from 'styled-components';

const ContainerText = styled.section`
    padding-top: 20px;
    width: 80vw;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    margin: 10px auto 40px auto;
    @media (min-width: 900px) {
        width: 70vw;
    }
`

export default function TextContainer(props) {
  return <ContainerText>{props.children}</ContainerText>
}
