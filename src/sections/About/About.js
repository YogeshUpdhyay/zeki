import Tape from "../../components/Tape";
import SkewedTape from "../../components/SkewedTape";
import "./About.css";

import robinImage from "../../static/img/robin.png";
import shwetaImage from "../../static/img/shweta.png";

const About = (props) => {
    return (
        <>
            <Tape
                textContent={<h1 className="display">ABOUT US</h1>}
                svgContent={
                    <svg
                        width="38"
                        height="38"
                        viewBox="0 0 38 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M22.0947 6.36672L26.2427 2.73253L26.3176 8.24686L26.3267 8.91571L26.9656 8.71766L32.2332 7.08482L30.0586 12.1529L29.7949 12.7676L30.4591 12.8465L35.9354 13.4973L31.8876 17.2428L31.3966 17.6971L31.9713 18.0394L36.7094 20.8613L31.4881 22.6365L30.8548 22.8519L31.2406 23.3983L34.4213 27.9035L28.9293 27.4015L28.2632 27.3406L28.3934 27.9967L29.4667 33.4061L24.6537 30.7138L24.0699 30.3872L23.922 31.0396L22.7023 36.4178L19.4005 32.0006L19 31.4649L18.5995 32.0006L15.2977 36.4178L14.078 31.0396L13.9301 30.3872L13.3463 30.7138L8.53333 33.4061L9.60661 27.9967L9.73679 27.3406L9.07066 27.4015L3.57872 27.9035L6.75941 23.3983L7.1452 22.8519L6.5119 22.6365L1.29059 20.8613L6.02871 18.0394L6.60341 17.6971L6.11244 17.2428L2.06457 13.4973L7.54087 12.8465L8.2051 12.7676L7.94135 12.1529L5.76685 7.08482L11.0344 8.71766L11.6733 8.91571L11.6824 8.24686L11.7573 2.73253L15.9053 6.36672L16.4084 6.80751L16.6887 6.20019L19 1.19304L21.3113 6.20019L21.5916 6.80751L22.0947 6.36672Z"
                            fill="#F8D457"
                            stroke="#1A1A1A"
                        />
                    </svg>
                }
                gap={50}
                repeat={4}
                speed={200}
                color="black"
            />

            <div className="about-section">
                <svg
                    version="1.1"
                    baseProfile="full"
                    xmlns="http://www.w3.org/2000/svg"
                    xlink="http://www.w3.org/1999/xlink"
                    ev="http://www.w3.org/2001/xml-events"
                >
                    <title>Text Pattern Fill Example</title>
                    <defs>
                        <pattern
                            id="img1"
                            patternUnits="userSpaceOnUse"
                            width="400"
                            height="400"
                        >
                            <image href={robinImage} width="400" height="400" />
                        </pattern>
                    </defs>
                    <polygon
                        style={{ height: 400, width: 400, scale: 3 }}
                        fill="url(#img1)"
                        class="st0"
                        points="19.44,50.16 8.22,30.72 30.72,30.72 30.72,8.13 50.16,19.44 61.44,0 72.72,19.44 92.16,8.13 92.16,30.72 114.75,30.72 103.44,50.16 122.88,61.44 103.44,72.72 114.75,92.16 92.16,92.16 92.16,114.66 72.72,103.44 61.44,122.88 50.16,103.44 30.72,114.66 30.72,92.16 8.22,92.16 19.44,72.72 0,61.44 19.44,50.16"
                    />
                </svg>
                <h1 className="about-text">
                    HEY, I AM ROBIN I LOVE TYPEFACES AND FONTS
                </h1>
                <h1 className="about-text">
                    HEY, I AM ROBIN I LOVE TYPEFACES AND FONTS
                </h1>
                <div className="circle-image"></div>
            </div>

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
                    <h1 className="highlight-text">
                        WE LOVE DESIGNING WEBSITES
                    </h1>
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
        </>
    );
};

export default About;
