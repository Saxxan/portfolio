import React from 'react';
import styled from 'styled-components';
import ContactForm from './components/contactForm/ContactForm';

const ContactMainContainer = styled.main`
  width: 80%;
  height: 100%;
  padding: 20px 0 20px 20px;
  @media (min-width: 900px) {
    padding: 10px 40px;
  }
`

const FormTitle = styled.h3`
  margin: 0 auto;
  padding: 0 10px;
  font-size: 18px;
  font-weight: 400;
  @media (min-width: 900px) {
    font-size: 25px;
  }
`

const FormText = styled.p`
  font-size: 15px;
  padding: 10px;
  @media (min-width: 900px) {
    font-size: 20px;
  }`

export default function ContactMain() {
  return (
    <ContactMainContainer>
      <FormTitle>Better together</FormTitle>
      <FormText>Let's get in touch and change the world together.</FormText>
      <ContactForm/>
    </ContactMainContainer>
  )
}
