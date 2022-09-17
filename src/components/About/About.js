import Tape from '../Tape/Tape'
import "./About.css"

import robinImage from "../../static/img/robin.png" 
import shwetaImage from "../../static/img/shweta.png"

const About = (props) => {
    return (
        <>
            <Tape 
                textContent={"ABOUT US"} 
                svgContent={
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.0947 6.36672L26.2427 2.73253L26.3176 8.24686L26.3267 8.91571L26.9656 8.71766L32.2332 7.08482L30.0586 12.1529L29.7949 12.7676L30.4591 12.8465L35.9354 13.4973L31.8876 17.2428L31.3966 17.6971L31.9713 18.0394L36.7094 20.8613L31.4881 22.6365L30.8548 22.8519L31.2406 23.3983L34.4213 27.9035L28.9293 27.4015L28.2632 27.3406L28.3934 27.9967L29.4667 33.4061L24.6537 30.7138L24.0699 30.3872L23.922 31.0396L22.7023 36.4178L19.4005 32.0006L19 31.4649L18.5995 32.0006L15.2977 36.4178L14.078 31.0396L13.9301 30.3872L13.3463 30.7138L8.53333 33.4061L9.60661 27.9967L9.73679 27.3406L9.07066 27.4015L3.57872 27.9035L6.75941 23.3983L7.1452 22.8519L6.5119 22.6365L1.29059 20.8613L6.02871 18.0394L6.60341 17.6971L6.11244 17.2428L2.06457 13.4973L7.54087 12.8465L8.2051 12.7676L7.94135 12.1529L5.76685 7.08482L11.0344 8.71766L11.6733 8.91571L11.6824 8.24686L11.7573 2.73253L15.9053 6.36672L16.4084 6.80751L16.6887 6.20019L19 1.19304L21.3113 6.20019L21.5916 6.80751L22.0947 6.36672Z" fill="#F8D457" stroke="#1A1A1A"/>
                    </svg>
                }
            />
            <div className="robin-section">
                <div className="burst-image"></div>
                <h1 className="about-text">
                    HEY, I AM ROBIN
                    I LOVE TYPEFACES AND FONTS
                </h1>
            </div>
            <div className="shweta-section">
                <h1 className="about-text">
                    HEY, I AM ROBIN
                    I LOVE TYPEFACES AND FONTS
                </h1>
                <div className="circle-image"></div>
            </div>
        </>
    )
}

export default About
