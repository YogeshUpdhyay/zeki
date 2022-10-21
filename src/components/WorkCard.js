import styled from "styled-components";

const WorkCard = styled.div`
    display: block;
    position: relative;
    background-color: ${(props) => props.theme.white};
    border: 2px solid ${(props) => props.theme.black};
    border-radius: 10px;
    box-shadow: 5px 5px ${(props) => props.theme.black};
    width: 25vw;
    height: 800px;
    margin: 10px;
    overflow-y: hidden;
    @media (max-width: 1200px) {
        width: 80vw;
        height: 400px;
    }
    @media (max-width: 768px) {
        height: 250px;
    }
`;

export default WorkCard;
