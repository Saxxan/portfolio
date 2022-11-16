import React from "react";
import styled from "styled-components";
import { SectionPageLight } from "../../components/sectionPage/SectionPage";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import ContactMain from "./components/ContactMainContent/ContactMain";
import SocialAside from "./components/SocialMediaAside/SocialAside";

const ContactContentWrapper = styled.article`
    width: 100%;
    height: 100%;
    display: flex;
    gap: 10px;
`

export default function Contact() {
    return (
        <SectionPageLight>
            <SectionTitle title='Contact'></SectionTitle>
            <ContactContentWrapper>
                <SocialAside/>
                <ContactMain/>
            </ContactContentWrapper>
        </SectionPageLight>
    );
}