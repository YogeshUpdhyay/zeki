import styled from "styled-components";

const WorkCard = styled.div`
    background-color: ${(props) => props.theme.white};
    border: 2px solid ${(props) => props.theme.black};
    border-radius: 10px;
    box-shadow: 5px 5px ${(props) => props.theme.black};
    min-width: 300px;
    min-height: 650px;
    margin: 10px;
`;

export default WorkCard;
