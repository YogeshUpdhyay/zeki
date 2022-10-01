import {
    milestone,
    greenStar,
    yellowSmallBurst,
    purpleBurst,
} from "../../images";
import "./Milestones.css";

const Milestones = (props) => {
    return (
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
                            <img
                                height="40px"
                                width="40px"
                                src={yellowSmallBurst}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="milestones-card">
                        <div className="milestones-card-duration">
                            2021-CURRENT
                        </div>
                        <div className="milestones-card-text">FREELANCE</div>
                        <div className="milestones-card-img">
                            <img
                                height="40px"
                                width="40px"
                                src={purpleBurst}
                                alt=""
                            />
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
                            <img
                                height="40px"
                                width="40px"
                                src={greenStar}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <img width="100%" src={milestone} alt="" />
            </div>
        </section>
    );
};

export default Milestones;
