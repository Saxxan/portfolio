import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
    font-size: 15px;
    margin: 30px auto;
    padding: 10px 0;
    max-width: ${props => props.wide ? props.wide : "400px"};
    @media (min-width: 900px) {
        font-size: 23px;
        margin: auto 30px;
        padding: 20px 0;
    }
`

export default function TextBox(props) {
  return <Text wide={props.wide}>{props.text}</Text>
}
