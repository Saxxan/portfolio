import React from 'react';
import styled from 'styled-components';
import Arrow from './Arrow';

const CodeProjectCardWrapper = styled.article`
    width: 280px;
    height: 280px;
    margin: 10px 0;
    padding: 20px;
    border: 1px solid var(--primary);
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default function DevProjectCard(props) {
  return (
    <CodeProjectCardWrapper>
      <Arrow/>
      <h3>{props.title}</h3>
      <p>{props.subtitle}</p>
    </CodeProjectCardWrapper>
  )
}
