import styled from "styled-components";
import Tape from "./Tape";

const SkewedTapeContainer = styled.div`
    position: relative;
    z-index: 2;
`;

const SkewedTapeWrapper = styled.div`
    width: 100%;
    position: absolute;
    top: ${(props) => props.top || 0};
    left: ${(props) => props.left || 0};
`;

const SkewedTape = ({
    speed,
    backgroundColor,
    color,
    rotateFirstBy,
    rotateSecondBy,
    children,
    borderColor,
    top,
    left,
}) => {
    return (
        <SkewedTapeContainer>
            <SkewedTapeWrapper top={top} left={left}>
                <Tape
                    speed={speed}
                    backgroundColor={backgroundColor}
                    color={color}
                    rotateBy={rotateFirstBy}
                    direction="left"
                    borderColor={borderColor}
                    zIndex={3}
                >
                    {children}
                </Tape>
            </SkewedTapeWrapper>
            <SkewedTapeWrapper top={top} left={left}>
                <Tape
                    speed={speed}
                    backgroundColor={backgroundColor}
                    color={color}
                    rotateBy={rotateSecondBy}
                    direction="right"
                    borderColor={borderColor}
                    zIndex={4}
                >
                    {children}
                </Tape>
            </SkewedTapeWrapper>
        </SkewedTapeContainer>
    );
};

export default SkewedTape;
