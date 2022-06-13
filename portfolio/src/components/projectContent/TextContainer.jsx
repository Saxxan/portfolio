import React from 'react';
import styled from 'styled-components';

const ContainerText = styled.section`
    padding-top: 20px;
    width: 80vw;
    margin: 10px auto 40px auto;
    @media (min-width: 900px) {
        padding-top: 30px;
    }
`

export default function TextContainer(props) {
  return <ContainerText>{props.children}</ContainerText>
}
