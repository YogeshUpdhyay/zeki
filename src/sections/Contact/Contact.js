import Tape from "../../components/Tape";
import Button from "../../components/Button";
import { envlopeBottom, envlopeTop } from "../../images";
import "./Contact.css";

const Envelope = () => {
    return (
        <svg
            width="fit-content"
            height="fit-content"
            viewBox="0 0 970 694"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M485.5 2.04407L485.714 2V2.08815L968 101.235V348.677H485.714H485.286H3.00006V101.235L485.286 2.08815V2L485.5 2.04407Z"
                fill="white"
            />
            <path
                d="M485.714 2H487.214V0.160268L485.412 0.530726L485.714 2ZM485.5 2.04407L485.198 3.51335L485.5 3.57544L485.802 3.51335L485.5 2.04407ZM485.714 2.08815H484.214V3.31115L485.412 3.55742L485.714 2.08815ZM968 101.235H969.5V100.012L968.302 99.7653L968 101.235ZM968 348.677V350.177H969.5V348.677H968ZM3 348.677H1.5V350.177H3V348.677ZM3 101.235L2.69795 99.7653L1.5 100.012V101.235H3ZM485.286 2.08815L485.588 3.55742L486.786 3.31115V2.08815H485.286ZM485.286 2L485.588 0.530726L483.786 0.160268V2H485.286ZM485.412 0.530726L485.198 0.574798L485.802 3.51335L486.016 3.46927L485.412 0.530726ZM487.214 2.08815V2H484.214V2.08815H487.214ZM485.412 3.55742L967.698 102.704L968.302 99.7653L486.016 0.618871L485.412 3.55742ZM966.5 101.235V348.677H969.5V101.235H966.5ZM968 347.177H485.714V350.177H968V347.177ZM485.714 347.177H485.286V350.177H485.714V347.177ZM3 350.177H485.286V347.177H3V350.177ZM1.5 101.235V348.677H4.5V101.235H1.5ZM484.983 0.618871L2.69795 99.7653L3.30205 102.704L485.588 3.55742L484.983 0.618871ZM486.786 2.08815V2H483.786V2.08815H486.786ZM484.983 3.46927L485.198 3.51335L485.802 0.574798L485.588 0.530726L484.983 3.46927Z"
                fill="#1A1A1A"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M484.5 202.106L2 103.121V691.933H484.286H484.714H967V103.121L484.5 202.106Z"
                fill="white"
            />
            <path
                d="M2 103.121L2.40193 101.162L0 100.669V103.121H2ZM484.5 202.106L484.098 204.066L484.5 204.148L484.902 204.066L484.5 202.106ZM2 691.933H0V693.933H2V691.933ZM967 691.933V693.933H969V691.933H967ZM967 103.121H969V100.669L966.598 101.162L967 103.121ZM1.59807 105.08L484.098 204.066L484.902 200.147L2.40193 101.162L1.59807 105.08ZM4 691.933V103.121H0V691.933H4ZM484.286 689.933H2V693.933H484.286V689.933ZM484.286 693.933H484.714V689.933H484.286V693.933ZM484.714 693.933H967V689.933H484.714V693.933ZM969 691.933V103.121H965V691.933H969ZM966.598 101.162L484.098 200.147L484.902 204.066L967.402 105.08L966.598 101.162Z"
                fill="#1A1A1A"
            />
        </svg>
    );
};

const EnvelopeTop = (props) => {
    return (
        <svg
            width=""
            height="fit-content"
            viewBox="0 0 1128 387"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M563.75 117.449L1 2V385.5H563.5H564H1126.5V2L563.75 117.449Z"
                fill="white"
            />
            <path
                d="M1 2L1.20097 1.0204L0 0.774022V2H1ZM563.75 117.449L563.549 118.428L563.75 118.47L563.951 118.428L563.75 117.449ZM1 385.5H0V386.5H1V385.5ZM1126.5 385.5V386.5H1127.5V385.5H1126.5ZM1126.5 2H1127.5V0.774022L1126.3 1.0204L1126.5 2ZM0.799034 2.9796L563.549 118.428L563.951 116.469L1.20097 1.0204L0.799034 2.9796ZM2 385.5V2H0V385.5H2ZM563.5 384.5H1V386.5H563.5V384.5ZM563.5 386.5H564V384.5H563.5V386.5ZM564 386.5H1126.5V384.5H564V386.5ZM1127.5 385.5V2H1125.5V385.5H1127.5ZM1126.3 1.0204L563.549 116.469L563.951 118.428L1126.7 2.9796L1126.3 1.0204Z"
                fill="#1A1A1A"
            />
        </svg>
    );
};

const ContactTape = () => {
    return (
        <Tape
            textContent={<h1 className="display">LET'S TALK</h1>}
            svgContent={
                <svg
                    width="34"
                    height="33"
                    viewBox="0 0 34 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M14.2022 2.32234C15.6332 0.522488 18.3668 0.522489 19.7978 2.32234C20.8688 3.66933 22.6051 4.3013 24.2914 3.95785C26.5445 3.49893 28.6386 5.25606 28.5779 7.55467C28.5325 9.27493 29.4563 10.8751 30.9688 11.6959C32.9898 12.7927 33.4645 15.4847 31.9405 17.2066C30.8 18.4952 30.4791 20.3149 31.1101 21.9158C31.9533 24.0551 30.5865 26.4224 28.3123 26.7618C26.6103 27.0158 25.1948 28.2035 24.6492 29.8356C23.92 32.0163 21.3513 32.9513 19.391 31.7494C17.9239 30.8499 16.0761 30.8499 14.609 31.7494C12.6487 32.9513 10.08 32.0163 9.35085 29.8356C8.80516 28.2035 7.3897 27.0158 5.68768 26.7618C3.41346 26.4224 2.04666 24.0551 2.88986 21.9158C3.52091 20.3149 3.20004 18.4952 2.05949 17.2066C0.535476 15.4847 1.01016 12.7927 3.03116 11.6959C4.54366 10.8751 5.46754 9.27493 5.42212 7.55467C5.36143 5.25606 7.45549 3.49893 9.70864 3.95785C11.3949 4.3013 13.1312 3.66933 14.2022 2.32234Z"
                        fill="#FEB3EB"
                        stroke="#1A1A1A"
                    />
                </svg>
            }
            gap={50}
            repeat={4}
            speed={50}
            color="black"
        />
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
        </section>
    );
};

export default Contact;
