import styled from "styled-components"

const PageSectionTitle = styled.h2`
    width: 90vw;
    margin: 0 auto;
    padding: 15vh 10px 10px 10px;
    font-size: 23px;
    font-weight: 500;
    @media (min-width: 900px){
        font-size: 30px;
        padding: 17vh 10px 10px 10px;
    }
`

export default function SectionTitle(props) {
    return <PageSectionTitle>{props.title}</PageSectionTitle>
}