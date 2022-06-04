import React from 'react';
import styled from 'styled-components';
import InputSubmit from './InputSubmit';
import InputText from './InputText';

const ContactFormWrapper = styled.form`
    width: 100%;
    margin: 0 auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const TextAreaForm = styled.textarea`
    width: 100%;
    padding: 5px;
    margin: 10px 0;
    height: 80px;
    font-size: 15px;
    border-radius: 5px;
    outline: 1px solid var(--font-grey);
    border: 1px solid var(--font-grey);
    &:focus-visible {
        outline: 1px solid var(--primary);
        border: 1px solid var(--primary);
    }
    @media (min-width: 900px) {
        width: 80%;
        padding: 10px;
        height: 100px;
        font-size: 20px;
    }
`

export default function ContactForm() {
  return (
    <ContactFormWrapper>
        <InputText inputName="Name"/>
        <InputText inputName="Email"/>
        <InputText inputName="Subject"/>
        <TextAreaForm placeholder="Message"/>
        <InputSubmit/>
    </ContactFormWrapper>
  )
}
