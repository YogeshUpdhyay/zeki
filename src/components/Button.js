import styled from "styled-components";

const Button = styled.button`
    background-color: ${(props) =>
        typeof props.theme[props.color] !== "undefined"
            ? props.theme[props.color]
            : props.theme.beige};
    height: 50px;
    width: ${(props) =>
        typeof props.width !== "undefined" ? props.width : "200px"};
    color: ${(props) => props.theme.black};
    border-radius: 10px;
    box-shadow: 5px 5px ${(props) => props.theme.black};
    border: 2px solid ${(props) => props.theme.black};
    padding: 10px;
`;

export default Button;