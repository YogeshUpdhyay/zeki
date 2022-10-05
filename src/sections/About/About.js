import Tape from "../../components/Tape";
import SkewedTape from "../../components/SkewedTape";
import "./About.css";

import { robinImage, purpleBurstWB, yellowBurst } from "../../images";

const BurstImage = () => {
    return (
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 900 887"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
        >
            <path
                d="M370.3 3.68399L464.967 85.1574C465.666 85.7593 466.687 85.8046 467.436 85.2672L568.958 12.5137L618.899 126.993C619.268 127.839 620.168 128.322 621.077 128.163L744.111 106.663L739.436 231.474C739.402 232.396 740.002 233.222 740.89 233.474L861.069 267.485L802.703 377.908C802.272 378.723 802.455 379.728 803.146 380.34L896.666 463.127L796.17 537.29C795.427 537.838 795.156 538.823 795.513 539.673L843.852 654.839L721.13 678.054C720.223 678.225 719.552 678.995 719.504 679.916L713.088 804.65L592.446 772.319C591.555 772.08 590.616 772.482 590.173 773.292L530.272 882.889L435.606 801.416C434.907 800.814 433.886 800.768 433.136 801.306L331.615 874.059L281.673 759.58C281.304 758.734 280.405 758.251 279.496 758.41L156.462 779.91L161.137 655.099C161.171 654.177 160.571 653.351 159.683 653.099L39.5042 619.088L97.8697 508.665C98.3008 507.85 98.118 506.845 97.4271 506.233L3.90706 423.446L104.403 349.283C105.146 348.735 105.417 347.75 105.06 346.9L56.7209 231.734L179.443 208.519C180.35 208.348 181.021 207.578 181.069 206.657L187.485 81.9229L308.127 114.254C309.018 114.493 309.957 114.091 310.399 113.281L370.3 3.68399Z"
                fill="url(#pattern0)"
                stroke="#1A1A1A"
                strokeWidth="4"
                strokeLinejoin="round"
            />
            <defs>
                <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use
                        href="#image0_105_563"
                        transform="translate(-0.00323961 0.0933875) scale(0.000925926)"
                    />
                </pattern>
                <image
                    id="image0_105_563"
                    width="1300"
                    height="1300"
                    href={robinImage}
                />
            </defs>
        </svg>
    );
};

const About = (props) => {
    return (
        <section id="about" className="about">
            <Tape speed={100} color="black">
                <h1 className="tape-text">ABOUT US</h1>
                <img height="30px" width="30px" src={yellowBurst} alt="" />
                <h1 className="tape-text">ABOUT US</h1>
                <img height="30px" width="30px" src={yellowBurst} alt="" />
                <h1 className="tape-text">ABOUT US</h1>
                <img height="30px" width="30px" src={yellowBurst} alt="" />
            </Tape>

            <div className="about-section">
                <div className="about-row">
                    <div className="burst-image">
                        <BurstImage />
                    </div>

                    <h2 className="about-text">
                        HEY, I AM ROBIN <br />I LOVE TYPEFACES AND FONTS
                    </h2>
                </div>

                <div className="about-row">
                    <div className="circle-image"></div>
                    <h2 className="about-text">
                        HEY, I AM ROBIN <br />I LOVE TYPEFACES AND FONTS
                    </h2>
                </div>
            </div>

            <SkewedTape
                speed={50}
                backgroundColor="black"
                color="white"
                rotateFirstBy={2}
                rotateSecondBy={-5}
                isFirstUpper={true}
                isSecondUpper={false}
            >
                <h1 className="highlight-text">WE LOVE DESIGNING WEBSITES</h1>
                <img height="30px" width="30px" src={purpleBurstWB} alt="" />
                <h1 className="highlight-text">WE LOVE DESIGNING WEBSITES</h1>
                <img height="30px" width="30px" src={purpleBurstWB} alt="" />
                <h1 className="highlight-text">WE LOVE DESIGNING WEBSITES</h1>
                <img
                    style={{ marginRight: 30 }}
                    height="30px"
                    width="30px"
                    src={purpleBurstWB}
                    alt=""
                />
            </SkewedTape>
        </section>
    );
};

export default About;
