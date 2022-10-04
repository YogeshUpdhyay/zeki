import styled from "styled-components";
import Tape from "./Tape";

const SkewedTapeContainer = styled.div`
    width: 100%;
    overflow-x: hidden;
`;

const SkewedTapeWrapper = styled.div`
    position: relative;
`;

const SkewedTape = ({ firstPosition, secondPosition, children }) => {
    return (
        <SkewedTapeContainer>
            <SkewedTapeWrapper>
                <Tape
                    backgroundColor={"black"}
                    speed={100}
                    rotateBy={3}
                    position="absolute"
                    zIndex={3}
                >
                    {children}
                </Tape>
            </SkewedTapeWrapper>

            <SkewedTapeWrapper>
                <Tape
                    backgroundColor={"black"}
                    speed={100}
                    rotateBy={-2}
                    position="absolute"
                    zIndex={4}
                >
                    {children}
                </Tape>
            </SkewedTapeWrapper>
        </SkewedTapeContainer>
    );
};

export default SkewedTape;
