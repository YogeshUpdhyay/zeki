import Marquee from "react-fast-marquee";
import styled from "styled-components";

const TapeContent = styled.div`
    display: flex;
    align-items: center;
    gap: ${(props) => props.gap}px;
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

const repeatContent = (textContent, svgContent, repeatCount, gap) => {
    let content = [svgContent];

    for (let index = 0; index < repeatCount - 1; index++) {
        content.push(textContent);
        content.push(svgContent);
    }

    content.push(<div style={{ marginRight: gap }}>{textContent}</div>);
    return content;
};

const Tape = ({
    textContent,
    svgContent,
    color,
    repeat,
    gap,
    speed,
    backgroundColor,
    rotateBy,
    isUpper,
}) => {
    var tapeContent = repeatContent(textContent, svgContent, repeat, gap);
    return (
        <TapeContainer
            color={color}
            backgroundColor={backgroundColor}
            rotateBy={rotateBy}
            isUpper={isUpper}
        >
            <Marquee speed={speed} gradient={false}>
                <TapeContent gap={gap}>{tapeContent}</TapeContent>
            </Marquee>
        </TapeContainer>
    );
};

export default Tape;
