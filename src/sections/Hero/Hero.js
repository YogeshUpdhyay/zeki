import "./Hero.css";
import Marquee from "react-fast-marquee";
import Button from "../../components/Button";

const Hero = (props) => {
    return (
        <div className="hero-container">
            <div className="cta">
                <h1 className="text-white">👋 HEY, THERE!</h1>
                <h1 className="display">TROUBLE MAKING YOUR OWN WEBSITE?</h1>
                <Button color="green">
                    <Marquee gradient={false} speed={100} pauseOnHover={true}>
                        • GET HELP • GET HELP • GET HELP
                    </Marquee>
                </Button>
            </div>
            <div className="playground">
                <div className="webpage">
                    <div className="option-row">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                    <div className="url-bar">
                        www.zeki.in | click and drag to make your own website
                    </div>
                    <div className="play-area"></div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
