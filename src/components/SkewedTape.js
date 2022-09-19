import styled from "styled-components";
import Tape from "./Tape";

const SkewedTapeContainer = styled.div`
    position: relative;
`;

const SkewedTapeWrapper = styled.div`
    width: 100%;
    position: absolute;
    top: ${(props) => props.top || 0};
    left: ${(props) => props.left || 0};
`;

const SkewedTape = ({
    firstPosition,
    secondPosition,
    svgContent,
    textContent,
    gap,
    repeat,
    speed,
    backgroundColor,
    color,
    rotateFirstBy,
    rotateSecondBy,
    isFirstUpper,
    isSecondUpper,
}) => {
    return (
        <SkewedTapeContainer>
            <SkewedTapeWrapper
                top={firstPosition.top}
                left={firstPosition.left}
            >
                <Tape
                    svgContent={svgContent}
                    textContent={textContent}
                    gap={gap}
                    repeat={repeat}
                    speed={speed}
                    backgroundColor={backgroundColor}
                    color={color}
                    rotateBy={rotateFirstBy}
                    isUpper={isFirstUpper}
                />
            </SkewedTapeWrapper>
            <SkewedTapeWrapper
                top={secondPosition.top}
                left={secondPosition.left}
            >
                <Tape
                    svgContent={svgContent}
                    textContent={textContent}
                    gap={gap}
                    repeat={repeat}
                    speed={speed}
                    backgroundColor={backgroundColor}
                    color={color}
                    rotateBy={rotateSecondBy}
                    isUpper={isSecondUpper}
                />
            </SkewedTapeWrapper>
        </SkewedTapeContainer>
    );
};

export default SkewedTape;
