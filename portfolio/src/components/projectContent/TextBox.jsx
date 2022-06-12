import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
    font-size: 15px;
    margin: 10px auto;
    padding: 10px;
    @media (min-width: 900px) {
        font-size: 23px;
    }
`

export default function TextBox(props) {
  return <Text>{props.text}</Text>
}
