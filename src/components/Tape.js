import Marquee from "react-fast-marquee";
import styled from "styled-components";

const TapeContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    padding: 10px;
`;

const TapeContainer = styled.div`
    background-color: ${(props) =>
        typeof props.theme[props.backgroundColor] !== "undefined"
            ? props.theme[props.backgroundColor]
            : props.theme.white};
    transform: skewY(${(props) => props.rotateBy}deg);
    border-bottom: 2px solid ${(props) => props.theme.black};
    border-top: 2px solid ${(props) => props.theme.black};
    color: ${(props) => props.theme[props.color] || props.theme.white};
    z-index: ${(props) => (props.isUpper ? 2 : 1)};
`;

const repeatContent = (repeatCount, content) => {
    let children = [];
    for (let index = 0; index < repeatCount - 1; index++) {
        children.push(content);
    }
};

const Tape = ({
    color,
    gap,
    speed,
    backgroundColor,
    rotateBy,
    isUpper,
    children,
}) => {
    // var tapeContent = repeatContent(textContent, svgContent, repeat, gap);
    return (
        <TapeContainer
            color={color}
            backgroundColor={backgroundColor}
            rotateBy={rotateBy}
            isUpper={isUpper}
        >
            <Marquee speed={speed} gradient={false}>
                <TapeContent>{children}</TapeContent>
            </Marquee>
        </TapeContainer>
    );
};

export default Tape;
