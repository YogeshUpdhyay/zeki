import { useState, useContext, useEffect } from "react";
import Button from "../../components/Button";
import AppContext from "../../contexts";
import { getAll } from "firebase/remote-config";
import "./Config.css";
import { faEdit, faTrash, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "react-modal";

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
    const [fiverrUrl, setFiverrUrl] = useState(props.config?.fiverrUrl);
    const [emailId, setEmailId] = useState(props.config?.emailId);
    const [phoneNumber, setPhoneNumber] = useState(props.config?.phoneNumber);

    return (
        <>
            <h1>Global Config</h1>
            <div className="config-element">
                <label htmlFor="fiverrUrl">Fiverr Url</label>
                <input
                    value={fiverrUrl}
                    type="text"
                    name="fiverrUrl"
                    id="fiverrUrl"
                    onChange={(e) => setFiverrUrl(e.target.value)}
                />
            </div>

            <div className="config-element">
                <label htmlFor="email">Email</label>
                <input
                    value={emailId}
                    type="text"
                    name="email"
                    id="email"
                    onChange={(e) => setEmailId(e.target.value)}
                />
            </div>

            <div className="config-element">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                    value={phoneNumber}
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
            </div>

            <Button color="green">
                <h3 className="buttonText">Save Config</h3>
            </Button>
        </>
    );
};

const AboutConfig = (props) => {
    const [robinHeadline, setRobinHeadline] = useState(props.config.robin);
    const [shwetaHeadline, setShwetaHeadline] = useState(props.config.shweta);

    return (
        <>
            <h1>About Config</h1>
            <div className="config-element">
                <label htmlFor="robinHeadline">Robin Headline</label>
                <input
                    value={robinHeadline}
                    type="text"
                    name="robinHeadline"
                    id="robinHeadline"
                    onChange={(e) => setRobinHeadline(e.target.value)}
                />
            </div>
            <div className="config-element">
                <label htmlFor="shwetaHeadline">Shweta Headline</label>
                <input
                    value={shwetaHeadline}
                    type="text"
                    name="shwetaHeadline"
                    id="shwetaHeadLine"
                    onChange={(e) => setShwetaHeadline(e.target.value)}
                />
            </div>
            <Button color="green">
                <h3 className="buttonText">Save Config</h3>
            </Button>
        </>
    );
};

const ReviewConfig = (props) => {
    const [reviews, setReviews] = useState(props.config);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [companyName, setCompanyName] = useState();
    const [ratings, setRatings] = useState();
    const [text, setText] = useState();
    const [country, setCountry] = useState();
    const [currentIndex, setCurrentIndex] = useState();

    const openModal = (index) => {
        const review = reviews[index];
        setCompanyName(review.companyName);
        setRatings(review.ratings);
        setText(review.text);
        setCountry(review.country);
        setCurrentIndex(index);
        setIsModalOpen(true);
    };

    const saveReview = () => {
        if (currentIndex) {
            reviews[currentIndex].companyName = companyName;
            reviews[currentIndex].ratings = ratings;
            reviews[currentIndex].text = text;
            reviews[currentIndex].country = country;
        } else {
            const review = {
                companyName: companyName,
                ratings: ratings,
                text: text,
                country: country,
            };
            reviews.push(review);
        }

        setReviews(reviews);
        setIsModalOpen(false);
    };

    const addNewReview = () => {
        setCurrentIndex(null);
        setCompanyName("");
        setRatings("");
        setText("");
        setCountry("");
        setIsModalOpen(true);
    };

    const saveChanges = () => console.log(reviews);

    return (
        <>
            <div className="add-new-container">
                <h1>Reviews Config</h1>
                <div className="button-group">
                    <Button color="green">
                        <h3 className="buttonText" onClick={saveChanges}>
                            Save Changes
                        </h3>
                    </Button>
                    <Button>
                        <h3 className="buttonText" onClick={addNewReview}>
                            Add
                        </h3>
                    </Button>
                </div>
            </div>
            <table className="config-table">
                <thead className="config-table-head">
                    <th>Company Name</th>
                    <th>Ratings</th>
                    <th>Text</th>
                    <th>Country</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </thead>
                <tbody>
                    {reviews &&
                        reviews.map(
                            (
                                { companyName, ratings, text, country },
                                index
                            ) => (
                                <tr key={index}>
                                    <td>{companyName}</td>
                                    <td>{ratings}</td>
                                    <td>{text}</td>
                                    <td>{country}</td>
                                    <td>
                                        <FontAwesomeIcon
                                            icon={faEdit}
                                            onClick={() => openModal(index)}
                                        />
                                    </td>
                                    <td>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </td>
                                </tr>
                            )
                        )}
                </tbody>
            </table>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                ariaHideApp={false}
            >
                <div className="modal-header">
                    <h1>Review</h1>
                    <Button
                        onClick={() => setIsModalOpen(false)}
                        width="fit-content"
                        height="fit-content"
                        color="purple"
                    >
                        <div className="close-button">
                            <FontAwesomeIcon icon={faClose} />
                            <p className="buttonText">Close</p>
                        </div>
                    </Button>
                </div>

                <div className="modal-body">
                    <div className="config-element">
                        <label htmlFor="companyName">Company Name</label>
                        <input
                            type="text"
                            name="companyName"
                            id="companyName"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                        />
                    </div>
                    <div className="config-element">
                        <label htmlFor="ratings">Ratings</label>
                        <input
                            type="text"
                            name="ratings"
                            id="ratings"
                            value={ratings}
                            onChange={(e) => setRatings(e.target.value)}
                        />
                    </div>
                    <div className="config-element">
                        <label htmlFor="text">Text</label>
                        <input
                            type="text"
                            name="text"
                            id="text"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                    </div>
                    <div className="config-element">
                        <label htmlFor="country">Country</label>
                        <input
                            type="text"
                            name="country"
                            id="country"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                        />
                    </div>
                    <Button onClick={() => saveReview()} color="green">
                        <p className="buttonText">Save Changes</p>
                    </Button>
                </div>
            </Modal>
        </>
    );
};

const WorkConfig = (props) => {
    console.log(props.config);
    const [allProjects, setAllProjects] = useState(props.config.allProjects);
    const [nfts, setNfts] = useState(props.config.nfts);
    const [games, setGames] = useState(props.config.games);
    const [dashboards, setDashboards] = useState(props.config.dashboards);
    const [eCommerce, setECommerce] = useState(props.config.eCommerce);
    const [mobileInterfaces, setMobileInterfaces] = useState(
        props.config.mobileInterfaces
    );

    return (
        <>
            <h1>Work Config</h1>
        </>
    );
};

const Config = (props) => {
    // fontawesome.library.add(faEdit);
    const [currentTab, setCurrentTab] = useState("globalConfig");
    const handleTabChange = (e) => {
        setCurrentTab(e.target.id);
        console.log(currentTab);
    };

    const [globalConfig, setGlobalConfig] = useState();
    const [aboutConfig, setAboutConfig] = useState();
    const [reviewConfig, setReviewConfig] = useState();
    const [workConfig, setWorkConfig] = useState();
    const [isLoaded, setIsLoaded] = useState(false);

    const { appConfig, functions, storage } = useContext(AppContext);

    useEffect(() => {
        const { aboutSection, globalConfig, reviewsSection, workSection } =
            getAll(appConfig);

        setGlobalConfig(JSON.parse(globalConfig._value));
        setAboutConfig(JSON.parse(aboutSection._value));
        setReviewConfig(JSON.parse(reviewsSection._value));
        setWorkConfig(JSON.parse(workSection._value));
        setIsLoaded(true);
    }, []);

    const rendermainContent = () => {
        switch (currentTab) {
            case "globalConfig":
                return <GlobalConfig config={globalConfig} />;
            case "aboutSection":
                return <AboutConfig config={aboutConfig} />;
            case "reviewsSection":
                return <ReviewConfig config={reviewConfig} />;
            case "workSection":
                return <WorkConfig config={workConfig} />;
            default:
                break;
        }
    };

    return (
        <div className="config-container">
            <Sidebar handleTabChange={handleTabChange} />
            {isLoaded ? (
                <div className="main-content">{rendermainContent()}</div>
            ) : (
                <></>
            )}
        </div>
    );
};

export default Config;
