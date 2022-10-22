import Tape from "../../components/Tape";
import SkewedTape from "../../components/SkewedTape";
import Button from "../../components/Button";
import Marquee from "react-fast-marquee";
import {
    envlopeBottom,
    envlopeTop,
    pinkBigPentagon,
    yellowStar,
} from "../../images";
import "./Contact.css";

const ContactTape = () => {
    return (
        <Tape speed={100} color="black">
            <h1 className="tape-text">LET'S TALK</h1>
            <img height="30px" width="30px" src={pinkBigPentagon} alt="" />
            <h1 className="tape-text">LET'S TALK</h1>
            <img height="30px" width="30px" src={pinkBigPentagon} alt="" />
            <h1 className="tape-text">LET'S TALK</h1>
            <img
                style={{ marginRight: 30 }}
                height="30px"
                width="30px"
                src={pinkBigPentagon}
                alt=""
            />
        </Tape>
    );
};

const Contact = (props) => {
    return (
        <section id="contact">
            <ContactTape />
            <div className="contact">
                <div className="contact-form">
                    <form action="">
                        <div className="form-group">
                            <div className="form-element">
                                <label htmlFor="name">NAME</label>
                                <input type="text" />
                            </div>
                            <div className="form-element">
                                <label htmlFor="email">EMAIL ADDRESS</label>
                                <input type="email" name="email" id="email" />
                            </div>
                        </div>
                        <div className="form-element">
                            <label htmlFor="question">HOW CAN WE HELP?</label>
                            <textarea
                                name="question"
                                id="question"
                                cols="30"
                                rows="10"
                            ></textarea>
                        </div>
                        <div className="submit-button">
                            <Button color="purple" width="100%">
                                <h4 className="buttonText">SEND</h4>
                            </Button>
                        </div>
                    </form>
                </div>
                <div className="envelope">
                    <div className="envelope top">
                        <img
                            width="100%"
                            height="100%"
                            src={envlopeTop}
                            alt="envelope-top"
                        />
                    </div>
                    <div className="envelope bottom">
                        <img
                            width="100%"
                            height="100%"
                            src={envlopeBottom}
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className="skewed-tape-wrapper-footer">
                <SkewedTape angle="-3deg" borderColor="white">
                    <Marquee speed={50} gradient={false}>
                        <h1 className="skewed-tape-text">HIT US UP</h1>
                        <img
                            className="skewed-tape-img"
                            src={yellowStar}
                            alt=""
                        />
                        <h1 className="skewed-tape-text">HIT US UP</h1>
                        <img
                            className="skewed-tape-img"
                            src={yellowStar}
                            alt=""
                        />
                        <h1 className="skewed-tape-text">HIT US UP</h1>
                        <img
                            className="skewed-tape-img"
                            src={yellowStar}
                            alt=""
                        />
                        <h1 className="skewed-tape-text">HIT US UP</h1>
                        <img
                            className="skewed-tape-img"
                            src={yellowStar}
                            alt=""
                        />
                        <h1 className="skewed-tape-text">HIT US UP</h1>
                        <img
                            className="skewed-tape-img"
                            src={yellowStar}
                            alt=""
                        />
                        <h1 className="skewed-tape-text">HIT US UP</h1>
                        <img
                            className="skewed-tape-img"
                            src={yellowStar}
                            alt=""
                        />
                        <h1 className="skewed-tape-text">HIT US UP</h1>
                        <img
                            className="skewed-tape-img"
                            src={yellowStar}
                            alt=""
                        />
                        <h1 className="skewed-tape-text">HIT US UP</h1>
                        <img
                            className="skewed-tape-img"
                            src={yellowStar}
                            alt=""
                        />
                    </Marquee>
                </SkewedTape>

                <SkewedTape
                    angle="3deg"
                    transformOrigin="right"
                    borderColor="white"
                >
                    <Marquee speed={50} gradient={false} direction="right">
                        <h1 className="skewed-tape-text">HIT US UP</h1>
                        <img
                            className="skewed-tape-img"
                            src={yellowStar}
                            alt=""
                        />
                        <h1 className="skewed-tape-text">HIT US UP</h1>
                        <img
                            className="skewed-tape-img"
                            src={yellowStar}
                            alt=""
                        />
                        <h1 className="skewed-tape-text">HIT US UP</h1>
                        <img
                            className="skewed-tape-img"
                            src={yellowStar}
                            alt=""
                        />
                        <h1 className="skewed-tape-text">HIT US UP</h1>
                        <img
                            className="skewed-tape-img"
                            src={yellowStar}
                            alt=""
                        />
                        <h1 className="skewed-tape-text">HIT US UP</h1>
                        <img
                            className="skewed-tape-img"
                            src={yellowStar}
                            alt=""
                        />
                        <h1 className="skewed-tape-text">HIT US UP</h1>
                        <img
                            className="skewed-tape-img"
                            src={yellowStar}
                            alt=""
                        />
                        <h1 className="skewed-tape-text">HIT US UP</h1>
                        <img
                            className="skewed-tape-img"
                            src={yellowStar}
                            alt=""
                        />
                        <h1 className="skewed-tape-text">HIT US UP</h1>
                        <img
                            className="skewed-tape-img"
                            src={yellowStar}
                            alt=""
                        />
                    </Marquee>
                </SkewedTape>
            </div>
        </section>
    );
};

export default Contact;
