import styled from "styled-components";

export const SectionPageLayout = styled.article`
    height: 100vh;
    padding: 15vh 10px 10px 10px;
    @media (min-width: 900px){
        padding: 17vh 10px 10px 10px;
    }
`
export const SectionPageDark = styled(SectionPageLayout)`
    color: var(--font-white);
    background: var(--bg-dark-1);
`

export const SectionPageLight = styled(SectionPageLayout)`
    background: var(--bg-ligth);
`