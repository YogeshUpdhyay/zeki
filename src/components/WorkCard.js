import styled from "styled-components";

const WorkCard = styled.div`
    background-color: ${(props) => props.theme.white};
    border: 2px solid ${(props) => props.theme.black};
    border-radius: 10px;
    box-shadow: 5px 5px ${(props) => props.theme.black};
    min-width: 25vw;
    min-height: 800px;
    margin: 10px;
    @media (max-width: 1200px) {
        min-width: 80vw;
        min-height: 400px;
    }
    @media (max-width: 768px) {
        min-height: 250px;
    }
`;

export default WorkCard;
