import React from 'react';
import styled from 'styled-components';

const InputForm = styled.input`
    padding: 5px;
    margin: 10px 0;
    width: 100%;
    max-width: 600px;
    height: 30px;
    font-size: 15px;
    border-radius: 5px;
    outline: 1px solid var(--font-grey);
    border: 1px solid var(--font-grey);
    &:focus-visible {
        outline: 1px solid var(--primary);
        border: 1px solid var(--primary);
    }
    @media (min-width: 900px) {
        padding: 10px;
        height: 50px;
        font-size: 20px;
    }
`

export default function InputText(props) {
  return <InputForm type="text" placeholder={props.inputName}/>
}
