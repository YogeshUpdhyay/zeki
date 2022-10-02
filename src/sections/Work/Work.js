import Tape from "../../components/Tape";
import "./Work.css";
import WorkCard from "../../components/WorkCard";
import Button from "../../components/Button";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { useState } from "react";
import fontawesome from "@fortawesome/fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { purplePentagon } from "../../images";

const WorkTape = () => {
    return (
        <Tape speed={100} color="black">
            <h1 className="tape-text">OUR WORK</h1>
            <img height="30px" width="30px" src={purplePentagon} alt="" />
            <h1 className="tape-text">OUR WORK</h1>
            <img height="30px" width="30px" src={purplePentagon} alt="" />
            <h1 className="tape-text">OUR WORK</h1>
            <img height="30px" width="30px" src={purplePentagon} alt="" />
        </Tape>
    );
};

const TabRow = () => {
    const [activeTab, setActiveTab] = useState("allProjects");
    return (
        <div className="tab-row">
            <div
                onClick={() => setActiveTab("allProjects")}
                className={
                    activeTab === "allProjects" ? "tab-item active" : "tab-item"
                }
            >
                PROJECTS - ALL PROJECTS
            </div>
            <div
                onClick={() => setActiveTab("nfts")}
                className={
                    activeTab === "nfts" ? "tab-item active" : "tab-item"
                }
            >
                NFTs
            </div>
            <div
                onClick={() => setActiveTab("eCommerce")}
                className={
                    activeTab === "eCommerce" ? "tab-item active" : "tab-item"
                }
            >
                E-COMMERCE
            </div>
            <div
                onClick={() => setActiveTab("dashboards")}
                className={
                    activeTab === "dashboards" ? "tab-item active" : "tab-item"
                }
            >
                DASHBOARDS
            </div>
            <div
                onClick={() => setActiveTab("games")}
                className={
                    activeTab === "games" ? "tab-item active" : "tab-item"
                }
            >
                GAMES
            </div>
            <div
                onClick={() => setActiveTab("mobileInterfaces")}
                className={
                    activeTab === "mobileInterfaces"
                        ? "tab-item active"
                        : "tab-item"
                }
            >
                MOBILE INTERFACES
            </div>
        </div>
    );
};

const Work = () => {
    fontawesome.library.add(faChevronDown, faChevronUp);
    const options = [
        { value: "allProjects", label: "ALL PROJECTS" },
        { value: "nfts", label: "NFTs" },
        { value: "eCommerce", label: "E-COMMERCE" },
        { value: "dashboards", label: "DASHBOARDS" },
        { value: "games", label: "GAMES" },
        { value: "mobileInterfaces", label: "MOBILE INTERFACES" },
    ];
    const defaultOption = options[0];

    return (
        <section id="work">
            <WorkTape />
            <div className="work-container">
                <div className="tab-group">
                    <TabRow />
                    <Dropdown
                        options={options}
                        value={defaultOption}
                        menuClassName="dropdown-menu"
                        arrowClosed={
                            <span>
                                <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
                            </span>
                        }
                        arrowOpen={
                            <span>
                                <FontAwesomeIcon icon="fa-solid fa-chevron-up" />
                            </span>
                        }
                        controlClassName="dropdown-control"
                        // arrowClassName="dropdown-arrow"
                        placeholderClassName="dropdown-placeholder"
                        className="dropdown"
                    />
                </div>

                <div className="work-group">
                    <WorkCard></WorkCard>
                    <WorkCard></WorkCard>
                    <WorkCard></WorkCard>
                    <WorkCard></WorkCard>
                    <WorkCard></WorkCard>
                    <WorkCard></WorkCard>
                </div>
                <div className="work-button">
                    <Button color="beige" width="150px">
                        <h4 className="buttonText">LOAD MORE</h4>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Work;
