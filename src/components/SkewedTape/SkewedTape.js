import Marquee from "react-fast-marquee";
import "./SkewedTape.css"


const SkewedTape = ({textContent, svgContent, speed}) => {
    return (
        <div className="skew-container">
            <div className="upper-skewed-tape">
                <Marquee
                    gradient={false}
                    speed={speed}
                >
                    <div className="tape-content">
                        <div>{svgContent}</div>
                        <h1 className="skew-text">{textContent}</h1>

                        <div>{svgContent}</div>
                        <h1 style={{marginRight: 150}} className="skew-text">{textContent}</h1>
                    </div>
                </Marquee>
            </div>
            <div className="lower-skewed-tape">
                <Marquee
                    gradient={false}
                    speed={speed}
                >   
                    <div className="tape-content">
                        <div>{svgContent}</div>
                        <h1 className="skew-text">{textContent}</h1>

                        <div>{svgContent}</div>
                        <h1 style={{marginRight: 150}} className="skew-text">{textContent}</h1>
                    </div>
                </Marquee>
            </div>

        </div>
        
    )
}

export default SkewedTape
