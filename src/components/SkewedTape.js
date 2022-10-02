import styled from "styled-components";
import Tape from "./Tape";

const SkewedTapeContainer = styled.div`
    position: relative;
    width: 100%;
`;

const SkewedTapeWrapper = styled.div`
    position: absolute;
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
                >
                    {children}
                </Tape>
            </SkewedTapeWrapper>

            <Tape
                backgroundColor={"black"}
                speed={100}
                rotateBy={-2}
                position="absolute"
            >
                {children}
            </Tape>
        </SkewedTapeContainer>
    );
};

export default SkewedTape;
