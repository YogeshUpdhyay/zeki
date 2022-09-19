import styled from "styled-components";
import "./SkewedTape.css";
import Tape from "../Tape";

const SkewedTape = styled(Tape)`
    transform-origin: bottom;
    position: absoulte;
    top: 0px;
    right: calc(50%) px;
`;

export default SkewedTape;
