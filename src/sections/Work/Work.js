import Tape from "../../components/Tape";
import "./Work.css";
import WorkCard from "../../components/WorkCard";
import Button from "../../components/Button";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const Work = () => {
    const [tabGroupWidth, setTabGroupWidth] = useState(0);
    const [workGroupWidth, setWorkGroupWidth] = useState(0);
    const [activeTab, setActiveTab] = useState(0);
    const tabRef = useRef();
    const workGroupRef = useRef();

    useEffect(() => {
        setTabGroupWidth(
            tabRef.current.scrollWidth - tabRef.current.offsetWidth
        );

        setWorkGroupWidth(
            workGroupRef.current.scrollWidth - workGroupRef.current.offsetWidth
        );
    }, []);

    return (
        <section id="work">
            <Tape
                textContent={<h1 className="display">OUR WORK</h1>}
                svgContent={
                    <svg
                        width="32"
                        height="36"
                        viewBox="0 0 32 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M13.6101 1.91799C14.9553 0.66073 17.0447 0.66073 18.3899 1.91799L22.1055 5.39064C22.6074 5.85975 23.2101 6.20771 23.8673 6.40784L28.7325 7.88931C30.4939 8.42567 31.5386 10.2351 31.1224 12.0287L29.9728 16.9828C29.8175 17.652 29.8175 18.348 29.9728 19.0172L31.1224 23.9713C31.5386 25.7649 30.4939 27.5743 28.7325 28.1107L23.8673 29.5922C23.2101 29.7923 22.6074 30.1402 22.1055 30.6094L18.3899 34.082C17.0447 35.3393 14.9553 35.3393 13.6101 34.082L9.89454 30.6094C9.39261 30.1403 8.78993 29.7923 8.1327 29.5922L3.2675 28.1107C1.50608 27.5743 0.461425 25.7649 0.877635 23.9713L2.02724 19.0172C2.18254 18.348 2.18254 17.652 2.02724 16.9828L0.877635 12.0287C0.461425 10.2351 1.50608 8.42567 3.2675 7.88931L8.1327 6.40784C8.78993 6.20771 9.39261 5.85975 9.89454 5.39064L13.6101 1.91799Z"
                            fill="#7894FF"
                            stroke="#1A1A1A"
                        />
                    </svg>
                }
                gap={50}
                repeat={4}
                speed={200}
                color="black"
            />
            <div className="work-container">
                <motion.div ref={tabRef} className="tab-group">
                    <motion.div
                        drag="x"
                        dragConstraints={{ right: 0, left: -tabGroupWidth }}
                        className="tab-row"
                    >
                        <div
                            onClick={(e) =>
                                setActiveTab(
                                    parseInt(e.target.getAttribute("index"))
                                )
                            }
                            index={0}
                            className={
                                activeTab === 0 ? "tab-item active" : "tab-item"
                            }
                        >
                            PROJECTS - ALL PROJECTS
                        </div>
                        <div
                            onClick={(e) =>
                                setActiveTab(
                                    parseInt(e.target.getAttribute("index"))
                                )
                            }
                            index={1}
                            className={
                                activeTab === 1 ? "tab-item active" : "tab-item"
                            }
                        >
                            NFTs
                        </div>
                        <div
                            onClick={(e) =>
                                setActiveTab(
                                    parseInt(e.target.getAttribute("index"))
                                )
                            }
                            index={2}
                            className={
                                activeTab === 2 ? "tab-item active" : "tab-item"
                            }
                        >
                            E-COMMERCE
                        </div>
                        <div
                            onClick={(e) =>
                                setActiveTab(
                                    parseInt(e.target.getAttribute("index"))
                                )
                            }
                            index={3}
                            className={
                                activeTab === 3 ? "tab-item active" : "tab-item"
                            }
                        >
                            DASHBOARDS
                        </div>
                        <div
                            onClick={(e) =>
                                setActiveTab(
                                    parseInt(e.target.getAttribute("index"))
                                )
                            }
                            index={4}
                            className={
                                activeTab === 4 ? "tab-item active" : "tab-item"
                            }
                        >
                            GAMES
                        </div>
                        <div
                            onClick={(e) =>
                                setActiveTab(
                                    parseInt(e.target.getAttribute("index"))
                                )
                            }
                            index={5}
                            className={
                                activeTab === 5 ? "tab-item active" : "tab-item"
                            }
                        >
                            MOBILE INTERFACES
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div ref={workGroupRef} className="work-group">
                    <motion.div
                        drag="x"
                        dragConstraints={{ right: 0, left: -workGroupWidth }}
                        className="work-group-row"
                    >
                        <WorkCard></WorkCard>
                        <WorkCard></WorkCard>
                        <WorkCard></WorkCard>
                    </motion.div>
                    <motion.div
                        drag="x"
                        dragConstraints={{ right: 0, left: -workGroupWidth }}
                        className="work-group-row"
                    >
                        <WorkCard></WorkCard>
                        <WorkCard></WorkCard>
                        <WorkCard></WorkCard>
                    </motion.div>
                </motion.div>
                <div className="work-button">
                    <Button color="beige">LOAD MORE</Button>
                </div>
            </div>
        </section>
    );
};

export default Work;
