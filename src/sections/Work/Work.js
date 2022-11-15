import Tape from "../../components/Tape";
import SkewedTape from "../../components/SkewedTape";
import "./Work.css";
import WorkCard from "../../components/WorkCard";
import Button from "../../components/Button";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Marquee from "react-fast-marquee";
import { useState, useContext, useEffect } from "react";
import { getValue } from "firebase/remote-config";
import fontawesome from "@fortawesome/fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { purpleStar, purplePentagon } from "../../images";
import AppContext from "../../contexts";

const WorkTape = () => {
    return (
        <Tape speed={100} color="black">
            <h1 className="tape-text">OUR WORK</h1>
            <img height="30px" width="30px" src={purplePentagon} alt="" />
            <h1 className="tape-text">OUR WORK</h1>
            <img height="30px" width="30px" src={purplePentagon} alt="" />
            <h1 className="tape-text">OUR WORK</h1>
            <img
                style={{ marginRight: 30 }}
                height="30px"
                width="30px"
                src={purplePentagon}
                alt=""
            />
        </Tape>
    );
};

const TabRow = ({ activeTab, handleTabChange }) => {
    return (
        <div className="tab-row">
            <div
                onClick={() => handleTabChange("allProjects")}
                className="tab-item"
            >
                {activeTab === "allProjects" ? (
                    <Button color="yellow" height="50px" width="175px">
                        <Marquee gradient={false} speed={50}>
                            <h4 className="buttonText">
                                •&nbsp;ALL&nbsp;PROJECTS&nbsp;•&nbsp;ALL&nbsp;PROJECTS&nbsp;•&nbsp;ALL&nbsp;PROJECTS&nbsp;
                            </h4>
                        </Marquee>
                    </Button>
                ) : (
                    <>ALL PROJECTS</>
                )}
            </div>
            <div onClick={() => handleTabChange("nfts")} className="tab-item">
                {activeTab === "nfts" ? (
                    <Button color="yellow" height="50px" width="175px">
                        <Marquee gradient={false} speed={50}>
                            <h4 className="buttonText">
                                •&nbsp;NFTs&nbsp;•&nbsp;NFTs&nbsp;•&nbsp;NFTs&nbsp;•&nbsp;NFTs&nbsp;•&nbsp;NFTs&nbsp;•&nbsp;NFTs&nbsp;
                            </h4>
                        </Marquee>
                    </Button>
                ) : (
                    <>NFTs</>
                )}
            </div>
            <div
                onClick={() => handleTabChange("eCommerce")}
                className="tab-item"
            >
                {activeTab === "eCommerce" ? (
                    <Button color="yellow" height="50px" width="175px">
                        <Marquee gradient={false} speed={50}>
                            <h4 className="buttonText">
                                •&nbsp;E-COMMERCE&nbsp;•&nbsp;E-COMMERCE&nbsp;•&nbsp;E-COMMERCE&nbsp;
                            </h4>
                        </Marquee>
                    </Button>
                ) : (
                    <>E-COMMERCE</>
                )}
            </div>
            <div
                onClick={() => handleTabChange("dashboards")}
                className="tab-item"
            >
                {activeTab === "dashboards" ? (
                    <Button color="yellow" height="50px" width="175px">
                        <Marquee gradient={false} speed={50}>
                            <h4 className="buttonText">
                                •&nbsp;DASHBOARDS&nbsp;•&nbsp;DASHBOARDS&nbsp;•&nbsp;DASHBOARDS&nbsp;
                            </h4>
                        </Marquee>
                    </Button>
                ) : (
                    <>DASHBOARDS</>
                )}
            </div>
            <div onClick={() => handleTabChange("games")} className="tab-item">
                {activeTab === "games" ? (
                    <Button color="yellow" height="50px" width="175px">
                        <Marquee gradient={false} speed={50}>
                            <h4 className="buttonText">
                                •&nbsp;GAMES&nbsp;•&nbsp;GAMES&nbsp;•&nbsp;GAMES&nbsp;
                            </h4>
                        </Marquee>
                    </Button>
                ) : (
                    <>GAMES</>
                )}
            </div>
            <div
                onClick={() => handleTabChange("mobileInterfaces")}
                className="tab-item"
            >
                {activeTab === "mobileInterfaces" ? (
                    <Button color="yellow" height="50px" width="175px">
                        <Marquee gradient={false} speed={50}>
                            <h4 className="buttonText">
                                •&nbsp;MOBILE INTERFACES&nbsp;•&nbsp;MOBILE
                                INTERFACES&nbsp;•&nbsp;MOBILE INTERFACES&nbsp;
                            </h4>
                        </Marquee>
                    </Button>
                ) : (
                    <>MOBILE INTERFACES</>
                )}
            </div>
        </div>
    );
};

const SkewedWorkTape = () => {
    return (
        <div className="skewed-tape-wrapper">
            <SkewedTape angle="-3deg">
                <Marquee speed={50} gradient={false}>
                    <h1 className="skewed-tape-text">200+ PROJECTS</h1>
                    <img className="skewed-tape-img" src={purpleStar} alt="" />
                    <h1 className="skewed-tape-text">68+ CLIENTS</h1>
                    <img className="skewed-tape-img" src={purpleStar} alt="" />
                    <h1 className="skewed-tape-text">5+ YEARS</h1>
                    <img className="skewed-tape-img" src={purpleStar} alt="" />
                    <h1 className="skewed-tape-text">5 STAR RATING</h1>
                    <img className="skewed-tape-img" src={purpleStar} alt="" />
                    <h1 className="skewed-tape-text">200+ PROJECTS</h1>
                    <img className="skewed-tape-img" src={purpleStar} alt="" />
                    <h1 className="skewed-tape-text">68+ CLIENTS</h1>
                    <img className="skewed-tape-img" src={purpleStar} alt="" />
                    <h1 className="skewed-tape-text">5+ YEARS</h1>
                    <img className="skewed-tape-img" src={purpleStar} alt="" />
                    <h1 className="skewed-tape-text">5 STAR RATING</h1>
                    <img className="skewed-tape-img" src={purpleStar} alt="" />
                </Marquee>
            </SkewedTape>

            <SkewedTape angle="3deg" transformOrigin="right">
                <Marquee speed={50} gradient={false} direction="right">
                    <h1 className="skewed-tape-text">200+ PROJECTS</h1>
                    <img className="skewed-tape-img" src={purpleStar} alt="" />
                    <h1 className="skewed-tape-text">68+ CLIENTS</h1>
                    <img className="skewed-tape-img" src={purpleStar} alt="" />
                    <h1 className="skewed-tape-text">5+ YEARS</h1>
                    <img className="skewed-tape-img" src={purpleStar} alt="" />
                    <h1 className="skewed-tape-text">5 STAR RATING</h1>
                    <img className="skewed-tape-img" src={purpleStar} alt="" />
                    <h1 className="skewed-tape-text">200+ PROJECTS</h1>
                    <img className="skewed-tape-img" src={purpleStar} alt="" />
                    <h1 className="skewed-tape-text">68+ CLIENTS</h1>
                    <img className="skewed-tape-img" src={purpleStar} alt="" />
                    <h1 className="skewed-tape-text">5+ YEARS</h1>
                    <img className="skewed-tape-img" src={purpleStar} alt="" />
                    <h1 className="skewed-tape-text">5 STAR RATING</h1>
                    <img className="skewed-tape-img" src={purpleStar} alt="" />
                </Marquee>
            </SkewedTape>
        </div>
    );
};

const TabGroup = ({ activeTab, handleTabChange }) => {
    const options = [
        { value: "allProjects", label: "ALL PROJECTS" },
        { value: "nfts", label: "NFTs" },
        { value: "eCommerce", label: "E-COMMERCE" },
        { value: "dashboards", label: "DASHBOARDS" },
        { value: "games", label: "GAMES" },
        { value: "mobileInterfaces", label: "MOBILE INTERFACES" },
    ];

    return (
        <div className="tab-group">
            {/* Tab row */}
            <TabRow activeTab={activeTab} handleTabChange={handleTabChange} />

            {/* Dropdown */}
            <Dropdown
                options={options}
                value={activeTab}
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
                placeholderClassName="dropdown-placeholder"
                className="dropdown"
                onChange={(selectedOption) =>
                    handleTabChange(selectedOption.value)
                }
            />
        </div>
    );
};

const Work = () => {
    fontawesome.library.add(faChevronDown, faChevronUp);

    const appContextData = useContext(AppContext);
    const appConfig = appContextData.appConfig;
    const [activeTab, setActiveTab] = useState("allProjects");
    const [workSection, setWorkSection] = useState();
    const [currentCards, setCurrentCards] = useState([]);

    const handleLoadMoreClick = () => {
        var additionalCards = [];
        if (
            activeTab === "mobileInterfaces" &&
            workSection.mobileInterfaces.length > 8
        ) {
            additionalCards = workSection.mobileInterfaces.slice(8);
        } else {
            if (workSection[activeTab].length > 6) {
                additionalCards = workSection[activeTab].slice(6);
            }
        }
        setCurrentCards([...currentCards, ...additionalCards]);
    };

    const handleTabChange = (value) => {
        setActiveTab(value);
        if (value === "mobileInterfaces") {
            setCurrentCards(workSection[value].slice(0, 8));
        } else {
            setCurrentCards(workSection[value].slice(0, 6));
        }
    };

    useEffect(() => {
        const workSection = JSON.parse(
            getValue(appConfig, "workSection")._value
        );
        console.log("worksection", workSection);
        setWorkSection(workSection);
        setCurrentCards(workSection.allProjects.slice(0, 6));
    }, []);

    return (
        <section id="work">
            <WorkTape />
            <div className="work-container">
                <TabGroup
                    activeTab={activeTab}
                    handleTabChange={handleTabChange}
                />

                {activeTab === "mobileInterfaces" ? (
                    <div className="work-group mob" id="work-group-container">
                        {currentCards &&
                            currentCards.map((url, index) => (
                                <div className="work-card mob" key={index}>
                                    <img
                                        loading="lazy"
                                        className="work-card-image"
                                        src={url}
                                        alt=""
                                    />
                                </div>
                            ))}
                    </div>
                ) : (
                    <div className="work-group" id="work-group-container">
                        {["dashboards", "games"].includes(activeTab)
                            ? currentCards &&
                              currentCards.map((url, index) => (
                                  <div
                                      className="work-card games-dashboards"
                                      key={index}
                                  >
                                      <img
                                          loading="lazy"
                                          className="work-card-image"
                                          src={url}
                                          alt=""
                                      />
                                  </div>
                              ))
                            : currentCards &&
                              currentCards.map((url, index) => (
                                  <div className="work-card" key={index}>
                                      <img
                                          loading="lazy"
                                          className="work-card-image"
                                          src={url}
                                          alt=""
                                      />
                                  </div>
                              ))}
                    </div>
                )}

                <div className="work-button">
                    <Button
                        color="beige"
                        width="150px"
                        whileTap={{ scale: 0.9 }}
                        onClick={handleLoadMoreClick}
                    >
                        <h4 className="buttonText">LOAD MORE</h4>
                    </Button>
                </div>
            </div>

            <SkewedWorkTape />
        </section>
    );
};

export default Work;
