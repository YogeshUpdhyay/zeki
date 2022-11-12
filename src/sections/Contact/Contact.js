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
import AppContext from "../../contexts";
import { useContext, useState } from "react";
import { httpsCallable } from "firebase/functions";
import { ClipLoader } from "react-spinners";

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

const ContactSkewedTape = () => {
    return (
        <div className="skewed-tape-wrapper-footer">
            <SkewedTape angle="-3deg" borderColor="white">
                <Marquee speed={50} gradient={false}>
                    <h1 className="skewed-tape-text">POKE US</h1>
                    <img className="skewed-tape-img" src={yellowStar} alt="" />
                    <h1 className="skewed-tape-text">POKE US</h1>
                    <img className="skewed-tape-img" src={yellowStar} alt="" />
                    <h1 className="skewed-tape-text">POKE US</h1>
                    <img className="skewed-tape-img" src={yellowStar} alt="" />
                    <h1 className="skewed-tape-text">POKE US</h1>
                    <img className="skewed-tape-img" src={yellowStar} alt="" />
                    <h1 className="skewed-tape-text">POKE US</h1>
                    <img className="skewed-tape-img" src={yellowStar} alt="" />
                    <h1 className="skewed-tape-text">POKE US</h1>
                    <img className="skewed-tape-img" src={yellowStar} alt="" />
                    <h1 className="skewed-tape-text">POKE US</h1>
                    <img className="skewed-tape-img" src={yellowStar} alt="" />
                    <h1 className="skewed-tape-text">POKE US</h1>
                    <img className="skewed-tape-img" src={yellowStar} alt="" />
                </Marquee>
            </SkewedTape>

            <SkewedTape
                angle="3deg"
                transformOrigin="right"
                borderColor="white"
            >
                <Marquee speed={50} gradient={false} direction="right">
                    <h1 className="skewed-tape-text">POKE US</h1>
                    <img className="skewed-tape-img" src={yellowStar} alt="" />
                    <h1 className="skewed-tape-text">POKE US</h1>
                    <img className="skewed-tape-img" src={yellowStar} alt="" />
                    <h1 className="skewed-tape-text">POKE US</h1>
                    <img className="skewed-tape-img" src={yellowStar} alt="" />
                    <h1 className="skewed-tape-text">POKE US</h1>
                    <img className="skewed-tape-img" src={yellowStar} alt="" />
                    <h1 className="skewed-tape-text">POKE US</h1>
                    <img className="skewed-tape-img" src={yellowStar} alt="" />
                    <h1 className="skewed-tape-text">POKE US</h1>
                    <img className="skewed-tape-img" src={yellowStar} alt="" />
                    <h1 className="skewed-tape-text">POKE US</h1>
                    <img className="skewed-tape-img" src={yellowStar} alt="" />
                    <h1 className="skewed-tape-text">POKE US</h1>
                    <img className="skewed-tape-img" src={yellowStar} alt="" />
                </Marquee>
            </SkewedTape>
        </div>
    );
};

const Contact = (props) => {
    const appContextData = useContext(AppContext);
    const functions = appContextData.functions;
    const [isSending, setIsSending] = useState(false);

    const handleFormSubmit = () => {
        setIsSending(true);
        const nameElement = document.getElementById("name");
        const emailElement = document.getElementById("email");
        const questionElement = document.getElementById("question");

        const values = {
            name: nameElement.value,
            emailId: emailElement.value,
            text: questionElement.value,
        };

        if (!values.name) {
            nameElement.style.borderColor = "red";
            setIsSending(false);
            return;
        }

        if (!values.emailId) {
            emailElement.style.borderColor = "red";
            setIsSending(false);
            return;
        }

        if (!values.text) {
            questionElement.style.borderColor = "red";
            setIsSending(false);
            return;
        }

        console.log(values);
        const inquire = httpsCallable(functions, "inquire");
        inquire(values)
            .then((result) => {
                const data = result.data;
                if (data.success) {
                    console.log(data.msg);
                    nameElement.value = "";
                    emailElement.value = "";
                    questionElement.value = "";
                } else {
                    console.log(data.msg);
                }
                setIsSending(false);
            })
            .catch((error) => {
                setIsSending(false);
                console.log(error);
            });
        console.log("completed");
    };

    const handleBlur = (e) => {
        if (!e.target.value) {
            const element = document.getElementById(e.target.id);
            element.style.borderColor = "red";
        } else {
            const element = document.getElementById(e.target.id);
            element.style.borderColor = "var(--black)";
        }
    };
    return (
        <section id="contact">
            <ContactTape />
            <div className="contact">
                <div className="contact-form">
                    <div className="form-group">
                        <div className="form-element">
                            <label htmlFor="name">NAME</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                onBlur={(e) => handleBlur(e)}
                            />
                        </div>
                        <div className="form-element">
                            <label htmlFor="email">EMAIL ADDRESS</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                onBlur={(e) => handleBlur(e)}
                            />
                        </div>
                    </div>
                    <div className="form-element">
                        <label htmlFor="question">HOW CAN WE HELP?</label>
                        <textarea
                            name="question"
                            id="question"
                            cols="30"
                            rows="10"
                            onBlur={(e) => handleBlur(e)}
                        ></textarea>
                    </div>
                    <div className="submit-button">
                        {isSending ? (
                            <>
                                <ClipLoader color="#7894FF" />
                            </>
                        ) : (
                            <Button
                                color="purple"
                                width="100%"
                                onClick={handleFormSubmit}
                                whileTap={{ scale: 0.9 }}
                            >
                                <h4 className="buttonText">SEND</h4>
                            </Button>
                        )}
                    </div>
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
            <ContactSkewedTape />
        </section>
    );
};

export default Contact;
