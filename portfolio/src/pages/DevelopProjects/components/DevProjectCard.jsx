import React from 'react';
import styled from 'styled-components';

const CodeProjectCard = styled.article`
    width: 250px;
    height: 250px;
    border: 1px solid red;
    border-radius: 50%;
`

export default function DevProjectCard() {
  return (
    <CodeProjectCard/>
  )
}
