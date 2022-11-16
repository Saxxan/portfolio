import React from 'react';
import styled from 'styled-components';

const VerticalLine = styled.div`
    width: 1px;
    height: 15%;
    border-radius: 1px;
    margin-left: 12px;
    background: var(--font-black);
`

export default function Line() {
  return <VerticalLine/>
}
