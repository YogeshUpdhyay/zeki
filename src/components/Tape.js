import Marquee from "react-fast-marquee";
import styled from "styled-components";

const TapeContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    overflow: hidden;
`;

const TapeContainer = styled.div`
    background-color: ${(props) =>
        typeof props.theme[props.backgroundColor] !== "undefined"
            ? props.theme[props.backgroundColor]
            : props.theme.white};
    border-bottom: 2px solid ${(props) => props.theme.black};
    border-top: 2px solid ${(props) => props.theme.black};
    color: ${(props) => props.theme[props.color] || props.theme.white};
    overflow: hidden;
    z-index: ${(props) => props.zIndex};
    position: ${(props) => props.position || "static"};
    top: ${(props) => props.top || "auto"};
    bottom: ${(props) => props.bottom || "auto"};
    left: ${(props) => props.left || "auto"};
    right: ${(props) => props.right || "auto"};
    transform-origin: ${(props) => props.tranformOrigin || "50% 50% 0"};
    transform: skewY(${(props) => props.rotateBy}deg);
`;

const Tape = ({
    color,
    speed,
    backgroundColor,
    zIndex,
    position,
    top,
    bottom,
    left,
    right,
    transformOrigin,
    rotateBy,
    children,
}) => {
    return (
        <TapeContainer
            color={color}
            backgroundColor={backgroundColor}
            zIndex={zIndex}
            position={position}
            top={top}
            bottom={bottom}
            left={left}
            right={right}
            transformOrigin={transformOrigin}
            rotateBy={rotateBy}
        >
            <Marquee speed={speed} gradient={false}>
                <TapeContent>{children}</TapeContent>
            </Marquee>
        </TapeContainer>
    );
};

export default Tape;
