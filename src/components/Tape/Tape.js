import './Tape.css'
import Marquee from "react-fast-marquee";

const Tape = ({textContent, svgContent, color}) => { 
    return (
        <div className="tape">
            <Marquee
                speed={200}
                gradient={false}
            >

                <div className="tape-content">

                    <div>{svgContent}</div>
                    <div>
                        <h1 className="display">{ textContent }</h1>
                    </div>

                    <div>{svgContent}</div>
                    <div>
                        <h1 className="display">{ textContent }</h1>
                    </div>

                    <div>{svgContent}</div>
                    <div style={{marginRight: 150}}>
                        <h1 className="display">{ textContent }</h1>
                    </div>

                </div>
            </Marquee>
        </div>
    )
}

export default Tape
