import { useState } from "react";
import "./Config.css";

const Sidebar = (props) => {
    return (
        <div className="side-bar">
            <div
                id="globalConfig"
                className="side-bar-element"
                onClick={props.handleTabChange}
            >
                Global Config
            </div>
            <div
                id="aboutSection"
                className="side-bar-element"
                onClick={props.handleTabChange}
            >
                About Section
            </div>
            <div
                id="reviewsSection"
                className="side-bar-element"
                onClick={props.handleTabChange}
            >
                Reviews Section
            </div>
            <div
                id="workSection"
                className="side-bar-element"
                onClick={props.handleTabChange}
            >
                Work Section
            </div>
        </div>
    );
};

const GlobalConfig = (props) => {
    return (
        <>
            <h1>Global Config</h1>
            <div className="config-element">
                <label htmlFor="fiverrUrl">Fiverr Url</label>
                <input type="text" name="fiverrUrl" id="fiverrUrl" />
            </div>

            <div className="config-element">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" />
            </div>

            <div className="config-element">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input type="text" name="phoneNumber" id="phoneNumber" />
            </div>
        </>
    );
};

const AboutConfig = (props) => {
    return <></>;
};

const ReviewConfig = (props) => {
    return <></>;
};

const WorkConfig = (props) => {
    return <></>;
};

const Config = (props) => {
    const [currentTab, setCurrentTab] = useState("globalConfig");
    const handleTabChange = (e) => {
        setCurrentTab(e.target.id);
        console.log(currentTab);
    };

    const rendermainContent = () => {
        switch (currentTab) {
            case "globalConfig":
                return <GlobalConfig />;
            case "aboutSection":
                return <AboutConfig />;
            case "reviewsSection":
                return <ReviewConfig />;
            case "workSection":
                return <WorkConfig />;
            default:
                break;
        }
    };

    return (
        <div className="config-container">
            <Sidebar handleTabChange={handleTabChange} />
            <div className="main-content">{rendermainContent()}</div>
        </div>
    );
};

export default Config;
