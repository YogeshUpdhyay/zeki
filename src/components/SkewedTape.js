import styled from "styled-components";

const SkewedTapeContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 60px;
    z-index: 2;
`;

const SkewedTapeBgContainer = styled.div`
    width: 100%;
    height: 100%;
    transform: skewY(${(props) => props.angle});
    background-color: ${(props) =>
        props.theme[props.backgroundColor] || props.theme.black};
    border-bottom: 2px solid
        ${(props) => props.theme[props.borderColor] || props.theme.black};
    border-top: 2px solid
        ${(props) => props.theme[props.borderColor] || props.theme.black};
    position: absolute;
    z-index: 3;
    display: block;
`;

const SkewedTapeContentContainer = styled.div`
    width: 100%;
    height: 100%;
    transform: rotate(${(props) => props.angle});
    transform-origin: ${(props) => props.tranformOrigin || "50% 50% 0"};
    background-color: ${(props) =>
        props.theme[props.backgroundColor] || props.theme.black};
    border-bottom: 2px solid
        ${(props) => props.theme[props.borderColor] || props.theme.black};
    border-top: 2px solid
        ${(props) => props.theme[props.borderColor] || props.theme.black};
    position: absolute;
    display: block;
    z-index: 4;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.white};
`;

const SkewedTape = (props) => {
    console.log(props);
    return (
        <SkewedTapeContainer>
            <SkewedTapeBgContainer angle={props.angle}></SkewedTapeBgContainer>
            <SkewedTapeContentContainer
                angle={props.angle}
                transformOrigin={props.transformOrigin}
                borderColor={props.borderColor}
            >
                {props.children}
            </SkewedTapeContentContainer>
        </SkewedTapeContainer>
    );
};

// const SkewedTape = ({
//     speed,
//     backgroundColor,
//     color,
//     rotateFirstBy,
//     rotateSecondBy,
//     children,
//     borderColor,
//     top,
//     left,
// }) => {
//     return (
//         <SkewedTapeContainer>
//             <SkewedTapeWrapper>

//             </SkewedTapeWrapper>
//         </SkewedTapeContainer>
//     );
// };

export default SkewedTape;
