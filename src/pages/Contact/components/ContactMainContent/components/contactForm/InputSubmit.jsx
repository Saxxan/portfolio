import React from 'react';
import styled from 'styled-components';

const InputSubmitBtn = styled.input`
    padding: 15px 30px;
    font-size: 15px;
    margin: 20px 0;
    background: transparent;
    border: 3px solid var(--primary);
    color: var(--primary);
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
    transition: all .5s ease-in-out;
    &:hover {
        background: var(--primary);
        color: var(--font-white);
    }
    @media (min-width: 900px) {
        font-size: 23px;
    }`

export default function InputSubmit() {
  return <InputSubmitBtn type="submit" value="Send message!"/>
}
