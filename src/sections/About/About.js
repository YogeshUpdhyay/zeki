import Tape from "../../components/Tape";
import SkewedTape from "../../components/SkewedTape";
import "./About.css";

import { robinImage, yellowBurst } from "../../images";

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

const AboutSkewedTape = () => {
    return (
        <SkewedTape
            firstPosition={{
                top: 0,
                left: 0,
            }}
            secondPosition={{
                top: 10,
                left: 0,
            }}
            textContent={
                <h1 className="highlight-text">WE LOVE DESIGNING WEBSITES</h1>
            }
            svgContent={
                <svg
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M21.7781 6.58059L24.954 3.48978L25.246 7.91177L25.3341 9.24668L26.5894 8.78425L30.7479 7.25239L29.216 11.4108L28.7536 12.6662L30.0885 12.7543L34.5105 13.0463L31.4197 16.2222L30.4866 17.1809L31.6703 17.8044L35.5912 19.8697L31.4759 21.5139L30.2336 22.0102L31.0613 23.0612L33.8032 26.5428L29.3749 26.3709L28.0381 26.319L28.3668 27.6159L29.4556 31.9117L25.48 29.9535L24.2799 29.3624L24.0527 30.6808L23.3001 35.048L20.4647 31.6422L19.6087 30.614L18.865 31.726L16.4011 35.4096L15.1961 31.1449L14.8324 29.8575L13.7006 30.5708L9.95149 32.9338L10.5853 28.5477L10.7766 27.2237L9.45255 27.415L5.06648 28.0488L7.42945 24.2997L8.14278 23.1679L6.85537 22.8042L2.59071 21.5992L6.27428 19.1353L7.38628 18.3916L6.35812 17.5356L2.95227 14.7002L7.31952 13.9476L8.6379 13.7204L8.04678 12.5203L6.08864 8.54473L10.3844 9.63352L11.6812 9.9622L11.6294 8.62539L11.4575 4.1971L14.9391 6.93901L15.9901 7.76674L16.4864 6.5244L18.1306 2.40906L20.1959 6.32999L20.8194 7.51364L21.7781 6.58059Z"
                        fill="#C9A4FF"
                        stroke="white"
                        stroke-width="2"
                    />
                </svg>
            }
            gap={50}
            repeat={10}
            speed={200}
            backgroundColor="black"
            color="white"
            rotateFirstBy={2}
            rotateSecondBy={-5}
            isFirstUpper={true}
            isSecondUpper={false}
        />
    );
};

const About = (props) => {
    return (
        <>
            <Tape speed={100} color="black">
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

            {/* <AboutSkewedTape /> */}
        </>
    );
};

export default About;
