import styled from "styled-components"

const PageSectionTitle = styled.h2`
    width: 90vw;
    margin: 0 auto;
    padding: 15vh 10px 10px 10px;
    text-align: left;
    font-size: 2rem;
    font-weight: 500;
`

export default function SectionTitle(props) {
    return <PageSectionTitle className="sectionTitle">{props.title}</PageSectionTitle>
}