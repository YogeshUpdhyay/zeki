import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import SkewedTape from '../../components/SkewedTape/SkewedTape'

import './Landing.css'

const Landing = (props) => {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <SkewedTape 
                svgContent={
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.7781 6.58059L24.954 3.48978L25.246 7.91177L25.3341 9.24668L26.5894 8.78425L30.7479 7.25239L29.216 11.4108L28.7536 12.6662L30.0885 12.7543L34.5105 13.0463L31.4197 16.2222L30.4866 17.1809L31.6703 17.8044L35.5912 19.8697L31.4759 21.5139L30.2336 22.0102L31.0613 23.0612L33.8032 26.5428L29.3749 26.3709L28.0381 26.319L28.3668 27.6159L29.4556 31.9117L25.48 29.9535L24.2799 29.3624L24.0527 30.6808L23.3001 35.048L20.4647 31.6422L19.6087 30.614L18.865 31.726L16.4011 35.4096L15.1961 31.1449L14.8324 29.8575L13.7006 30.5708L9.95149 32.9338L10.5853 28.5477L10.7766 27.2237L9.45255 27.415L5.06648 28.0488L7.42945 24.2997L8.14278 23.1679L6.85537 22.8042L2.59071 21.5992L6.27428 19.1353L7.38628 18.3916L6.35812 17.5356L2.95227 14.7002L7.31952 13.9476L8.6379 13.7204L8.04678 12.5203L6.08864 8.54473L10.3844 9.63352L11.6812 9.9622L11.6294 8.62539L11.4575 4.1971L14.9391 6.93901L15.9901 7.76674L16.4864 6.5244L18.1306 2.40906L20.1959 6.32999L20.8194 7.51364L21.7781 6.58059Z" fill="#C9A4FF" stroke="white" stroke-width="2"/>
                    </svg>
                }
                textContent={"WE LOVE DESIGNING WEBSITES"}
                speed={200}
            />
        </>
    )
}

export default Landing
