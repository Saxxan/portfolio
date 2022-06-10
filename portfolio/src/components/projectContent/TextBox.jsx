import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
    font-size: 15px;
    @media (min-width: 900px) {
        font-size: 20px;
    }`

export default function TextBox(props) {
  return <Text>{props.text}</Text>
}
