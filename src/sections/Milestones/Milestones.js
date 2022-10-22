import {
    milestone,
    greenStar,
    yellowSmallBurst,
    purpleBurst,
    purpleBurstWB,
} from "../../images";
import SkewedTape from "../../components/SkewedTape";
import Marquee from "react-fast-marquee";
import "./Milestones.css";

const Milestones = (props) => {
    return (
        <>
            <div className="skewed-tape-wrapper">
                <SkewedTape angle="3deg">
                    <Marquee speed={50} gradient={false} direction="right">
                        <h1 className="skewed-tape-text">
                            WE LOVE DESIGNING WEBSITES
                        </h1>
                        <img
                            className="skewed-tape-img"
                            src={purpleBurstWB}
                            alt=""
                        />
                        <h1 className="skewed-tape-text">
                            WE LOVE DESIGNING WEBSITES
                        </h1>
                        <img
                            className="skewed-tape-img"
                            src={purpleBurstWB}
                            alt=""
                        />
                        <h1 className="skewed-tape-text">
                            WE LOVE DESIGNING WEBSITES
                        </h1>
                        <img
                            className="skewed-tape-img"
                            src={purpleBurstWB}
                            alt=""
                        />
                        <h1 className="skewed-tape-text">
                            WE LOVE DESIGNING WEBSITES
                        </h1>
                        <img
                            className="skewed-tape-img"
                            src={purpleBurstWB}
                            alt=""
                        />
                        <h1 className="skewed-tape-text">
                            WE LOVE DESIGNING WEBSITES
                        </h1>
                        <img
                            className="skewed-tape-img"
                            src={purpleBurstWB}
                            alt=""
                        />
                    </Marquee>
                </SkewedTape>
                <SkewedTape angle="-3deg">
                    <Marquee speed={50} gradient={false}>
                        <h1 className="skewed-tape-text">
                            WE LOVE DESIGNING WEBSITES
                        </h1>
                        <img
                            className="skewed-tape-img"
                            src={purpleBurstWB}
                            alt=""
                        />
                        <h1 className="skewed-tape-text">
                            WE LOVE DESIGNING WEBSITES
                        </h1>
                        <img
                            className="skewed-tape-img"
                            src={purpleBurstWB}
                            alt=""
                        />
                        <h1 className="skewed-tape-text">
                            WE LOVE DESIGNING WEBSITES
                        </h1>
                        <img
                            className="skewed-tape-img"
                            src={purpleBurstWB}
                            alt=""
                        />
                        <h1 className="skewed-tape-text">
                            WE LOVE DESIGNING WEBSITES
                        </h1>
                        <img
                            className="skewed-tape-img"
                            src={purpleBurstWB}
                            alt=""
                        />
                        <h1 className="skewed-tape-text">
                            WE LOVE DESIGNING WEBSITES
                        </h1>
                        <img
                            className="skewed-tape-img"
                            src={purpleBurstWB}
                            alt=""
                        />
                    </Marquee>
                </SkewedTape>
            </div>
            <section id="milestones">
                <div className="milestones-container">
                    <div className="milestones-row">
                        <div className="milestones-card">
                            <div className="milestones-card-duration">
                                2020-2022
                            </div>
                            <div className="milestones-card-text">
                                INDUSTRY
                                <br /> WORK
                            </div>
                            <div className="milestones-card-img">
                                <img src={yellowSmallBurst} alt="" />
                            </div>
                        </div>
                        <div className="milestones-card">
                            <div className="milestones-card-duration">
                                2021-CURRENT
                            </div>
                            <div className="milestones-card-text">
                                FREELANCE
                            </div>
                            <div className="milestones-card-img">
                                <img src={purpleBurst} alt="" />
                            </div>
                        </div>
                        <div className="milestones-card">
                            <div className="milestones-card-duration">
                                2022-CURRENT
                            </div>
                            <div className="milestones-card-text">
                                MASTERS <br /> IN DESIGN
                            </div>
                            <div className="milestones-card-img">
                                <img src={greenStar} alt="" />
                            </div>
                        </div>
                    </div>
                    <img
                        className="milestones-bg-image"
                        src={milestone}
                        alt=""
                    />
                </div>
            </section>
        </>
    );
};

export default Milestones;
