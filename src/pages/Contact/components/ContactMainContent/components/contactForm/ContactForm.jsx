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
    @media (min-width: 900px) {
        width: 50vw;
    }
    @media (min-width: 1200px) {
        margin-left: 40px;
    }
`

const TextAreaForm = styled.textarea`
    width: 100%;
    max-width: 600px;
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
