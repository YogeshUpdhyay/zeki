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
import { purpleStar, purplePentagon, testProjectMobile } from "../../images";
import AppContext from "../../contexts";
import { ref, listAll, getDownloadURL } from "firebase/storage";

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

const TabRow = ({ activeTab, setActiveTab }) => {
    return (
        <div className="tab-row">
            <div
                onClick={() => setActiveTab("allProjects")}
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
            <div onClick={() => setActiveTab("nfts")} className="tab-item">
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
            <div onClick={() => setActiveTab("eCommerce")} className="tab-item">
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
                onClick={() => setActiveTab("dashboards")}
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
            <div onClick={() => setActiveTab("games")} className="tab-item">
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
                onClick={() => setActiveTab("mobileInterfaces")}
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
                    <h1 className="skewed-tape-text">4.8 STAR RATING</h1>
                    <img className="skewed-tape-img" src={purpleStar} alt="" />
                    <h1 className="skewed-tape-text">200+ PROJECTS</h1>
                    <img className="skewed-tape-img" src={purpleStar} alt="" />
                    <h1 className="skewed-tape-text">68+ CLIENTS</h1>
                    <img className="skewed-tape-img" src={purpleStar} alt="" />
                    <h1 className="skewed-tape-text">5+ YEARS</h1>
                    <img className="skewed-tape-img" src={purpleStar} alt="" />
                    <h1 className="skewed-tape-text">4.8 STAR RATING</h1>
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
                    <h1 className="skewed-tape-text">4.8 STAR RATING</h1>
                    <img className="skewed-tape-img" src={purpleStar} alt="" />
                    <h1 className="skewed-tape-text">200+ PROJECTS</h1>
                    <img className="skewed-tape-img" src={purpleStar} alt="" />
                    <h1 className="skewed-tape-text">68+ CLIENTS</h1>
                    <img className="skewed-tape-img" src={purpleStar} alt="" />
                    <h1 className="skewed-tape-text">5+ YEARS</h1>
                    <img className="skewed-tape-img" src={purpleStar} alt="" />
                    <h1 className="skewed-tape-text">4.8 STAR RATING</h1>
                    <img className="skewed-tape-img" src={purpleStar} alt="" />
                </Marquee>
            </SkewedTape>
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

    const { appConfig, functions, storage } = useContext(AppContext);
    const [activeTab, setActiveTab] = useState("allProjects");
    const [allProjects, setAllProjects] = useState();

    useEffect(() => {
        const workSection = JSON.parse(
            getValue(appConfig, "workSection")._value
        );
        console.log("worksection", workSection);
        setAllProjects(workSection.allProjects);
        console.log(allProjects);

        // const allProjectsRef = ref(storage, "allProjects");
        // listAll(allProjectsRef)
        //     .then((res) => {
        //         const allProjectsUrls = [];
        //         res.items.forEach((itemRef) => {
        //             getDownloadURL(itemRef)
        //                 .then((res) => allProjectsUrls.push(res))
        //                 .catch((error) => console.log(error));
        //         });
        //         console.log(allProjectsUrls);
        //         setAllProjects(allProjectsUrls);
        //         console.log(allProjects);
        //     })
        //     .catch((error) => console.log(error));
    }, []);

    return (
        <section id="work">
            <WorkTape />
            <div className="work-container">
                <div className="tab-group">
                    <TabRow activeTab={activeTab} setActiveTab={setActiveTab} />
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
                    {allProjects &&
                        allProjects.map((url) => (
                            <WorkCard>
                                <img
                                    className="work-card-image"
                                    src={url}
                                    alt=""
                                />
                            </WorkCard>
                        ))}
                    {/* <WorkCard></WorkCard>
                    <WorkCard></WorkCard>
                    <WorkCard></WorkCard>
                    <WorkCard></WorkCard>
                    <WorkCard></WorkCard> */}
                </div>
                <div className="work-button">
                    <Button
                        color="beige"
                        width="150px"
                        whileTap={{ scale: 0.9 }}
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
