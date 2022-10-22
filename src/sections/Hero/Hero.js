import "./Hero.css";
import Marquee from "react-fast-marquee";
import Button from "../../components/Button";
import { motion } from "framer-motion";
import {
    paragraph,
    headline,
    button,
    image,
    greenloremipsum,
    yellowloremipsum,
    pinkloremipsum,
} from "../../images";
import { useEffect, useRef, useState } from "react";

const Hero = (props) => {
    const parentDivref = useRef();
    const headlineRef = useRef();
    const paragraphRef = useRef();
    const buttonRef = useRef();
    const imageRef = useRef();
    const greenlpRef = useRef();
    const yellowlpRef = useRef();
    const pinklpRef = useRef();

    const [headlineConstraints, setHeadlineConstraints] = useState({});
    const [paragraphConstraints, setParagraphConstraints] = useState({});
    const [buttonConstraints, setButtonConstraints] = useState({});
    const [imageConstraints, setImageConstraints] = useState({});
    const [greenlpConstraints, setGreenlpConstraints] = useState({});
    const [yellowlpConstraints, setYellowlpConstraints] = useState({});
    const [pinklpConstraints, setPinklpConstraints] = useState({});

    useEffect(() => {
        const parentPosition = parentDivref.current.getBoundingClientRect();
        const headlinePosition = headlineRef.current.getBoundingClientRect();
        const paragraphPosition = paragraphRef.current.getBoundingClientRect();
        const buttonPosition = buttonRef.current.getBoundingClientRect();
        const imagePosition = imageRef.current.getBoundingClientRect();
        const greenlpPosition = greenlpRef.current.getBoundingClientRect();
        const yellowlpPosition = yellowlpRef.current.getBoundingClientRect();
        const pinklpPosition = pinklpRef.current.getBoundingClientRect();
        console.log(pinklpPosition);

        setHeadlineConstraints({
            left: -headlinePosition.x,
            right:
                parentPosition.width -
                (headlinePosition.x +
                    parentPosition.x +
                    headlinePosition.width),
            top: (headlinePosition.y - parentPosition.y) * -1,
            bottom:
                parentPosition.height - (headlinePosition.y - parentPosition.y),
        });

        setParagraphConstraints({
            left: -paragraphPosition.x,
            right:
                parentPosition.width -
                paragraphPosition.x -
                parentPosition.x -
                paragraphPosition.width,
            top: (paragraphPosition.y - parentPosition.y) * -1,
            bottom:
                parentPosition.height -
                (paragraphPosition.y - parentPosition.y),
        });

        setButtonConstraints({
            left: -buttonPosition.x,
            right:
                parentPosition.width -
                buttonPosition.x -
                parentPosition.x -
                buttonPosition.width,
            top: (buttonPosition.y - parentPosition.y) * -1,
            bottom:
                parentPosition.height - (buttonPosition.y - parentPosition.y),
        });

        setImageConstraints({
            left: -imagePosition.x,
            right:
                parentPosition.width -
                imagePosition.x -
                parentPosition.x -
                imagePosition.width,
            top: (imagePosition.y - parentPosition.y) * -1,
            bottom:
                parentPosition.height - (imagePosition.y - parentPosition.y),
        });

        setGreenlpConstraints({
            left: -greenlpPosition.x,
            right:
                parentPosition.width -
                greenlpPosition.x -
                parentPosition.x -
                greenlpPosition.width,
            top: (greenlpPosition.y - parentPosition.y) * -1,
            bottom:
                parentPosition.height - (greenlpPosition.y - parentPosition.y),
        });

        setPinklpConstraints({
            left: -pinklpPosition.x,
            right:
                parentPosition.width -
                pinklpPosition.x -
                parentPosition.x -
                pinklpPosition.width,
            top: (pinklpPosition.y - parentPosition.y) * -1,
            bottom:
                parentPosition.height - (pinklpPosition.y - parentPosition.y),
        });

        setYellowlpConstraints({
            left: -yellowlpPosition.x,
            right:
                parentPosition.width -
                yellowlpPosition.x -
                parentPosition.x -
                yellowlpPosition.width,
            top: (yellowlpPosition.y - parentPosition.y) * -1,
            bottom:
                parentPosition.height - (yellowlpPosition.y - parentPosition.y),
        });
    }, []);

    return (
        <div ref={parentDivref} className="hero-container">
            <div className="cta">
                <h3 className="text-white">👋 HEY, THERE!</h3>
                <h1 className="display">
                    TROUBLE <br /> MAKING <br /> YOUR OWN <br /> WEBSITE?
                </h1>
                <div className="cta-button">
                    <Button color="green" width="175px" height="50px">
                        <Marquee
                            gradient={false}
                            speed={50}
                            pauseOnHover={true}
                        >
                            <h4 className="buttonText">
                                •&nbsp;GET&nbsp;HELP&nbsp;•&nbsp;GET&nbsp;HELP&nbsp;•&nbsp;GET&nbsp;HELP&nbsp;
                            </h4>
                        </Marquee>
                    </Button>
                </div>
            </div>
            <div className="playground">
                <div className="webpage">
                    <div className="option-row">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                    <div className="url-bar">
                        www.pokistudios.in | click and drag to make your own
                        website
                    </div>
                    <div className="play-area">
                        <div className="top-play-area">
                            <div className="top-play-area-cta">
                                <motion.img
                                    drag
                                    dragConstraints={headlineConstraints}
                                    // animate={{
                                    //     rotate: [0, 10, 0, -10, 0],
                                    //     animationDuration: 0.5,
                                    // }}
                                    whileHover={{
                                        rotate: [0, 10, 0, -10, 0],
                                        animationDuration: 0.5,
                                    }}
                                    ref={headlineRef}
                                    src={headline}
                                    alt=""
                                />
                                <motion.img
                                    drag
                                    dragConstraints={paragraphConstraints}
                                    // animate={{
                                    //     rotate: [0, 10, 0, -10, 0],
                                    //     animationDuration: 0.5,
                                    // }}
                                    whileHover={{
                                        rotate: [0, 10, 0, -10, 0],
                                        animationDuration: 0.5,
                                    }}
                                    ref={paragraphRef}
                                    src={paragraph}
                                    alt=""
                                />
                                <motion.img
                                    drag
                                    dragConstraints={buttonConstraints}
                                    // animate={{
                                    //     rotate: [0, 10, 0, -10, 0],
                                    //     animationDuration: 0.5,
                                    // }}
                                    whileHover={{
                                        rotate: [0, 10, 0, -10, 0],
                                        animationDuration: 0.5,
                                    }}
                                    ref={buttonRef}
                                    src={button}
                                    alt=""
                                />
                            </div>
                            <div>
                                <motion.img
                                    drag
                                    dragConstraints={imageConstraints}
                                    // animate={{
                                    //     rotate: [0, 10, 0, -10, 0],
                                    //     animationDuration: 0.5,
                                    // }}
                                    whileHover={{
                                        rotate: [0, 10, 0, -10, 0],
                                        animationDuration: 0.5,
                                    }}
                                    ref={imageRef}
                                    className="top-play-area-image"
                                    src={image}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="bottom-play-area">
                            <motion.img
                                drag
                                dragConstraints={yellowlpConstraints}
                                // animate={{
                                //     rotate: [0, 10, 0, -10, 0],
                                //     animationDuration: 0.5,
                                // }}
                                whileHover={{
                                    rotate: [0, 10, 0, -10, 0],
                                    animationDuration: 0.5,
                                }}
                                ref={yellowlpRef}
                                src={yellowloremipsum}
                                alt=""
                            />
                            <motion.img
                                drag
                                dragConstraints={greenlpConstraints}
                                // animate={{
                                //     rotate: [0, 10, 0, -10, 0],
                                //     animationDuration: 0.5,
                                // }}
                                whileHover={{
                                    rotate: [0, 10, 0, -10, 0],
                                    animationDuration: 0.5,
                                }}
                                ref={greenlpRef}
                                src={greenloremipsum}
                                alt=""
                            />
                            <motion.img
                                drag
                                dragConstraints={pinklpConstraints}
                                // animate={{
                                //     rotate: [0, 10, 0, -10, 0],
                                //     animationDuration: 0.5,
                                // }}
                                whileHover={{
                                    rotate: [0, 10, 0, -10, 0],
                                    animationDuration: 0.5,
                                }}
                                ref={pinklpRef}
                                src={pinkloremipsum}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
