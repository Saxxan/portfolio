import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
    font-size: 15px;
    margin: 10px auto;
    padding: 10px 0;
    @media (min-width: 900px) {
        font-size: 23px;
        margin: 20px auto;
        padding: 20px 0;
    }
`

export default function TextBox(props) {
  return <Text>{props.text}</Text>
}
