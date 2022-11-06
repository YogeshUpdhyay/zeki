import {
    ReviewCard,
    ReviewCardCompany,
    ReviewCardCountry,
    ReviewCardRatings,
    ReviewCardText,
    getStars,
} from "../../components/ReviewCard";
import Button from "../../components/Button";
import Marquee from "react-fast-marquee";
import AppContext from "../../contexts";
import "./Reviews.css";
import { useState, useRef, useEffect, useContext } from "react";
import { getValue } from "firebase/remote-config";
import { motion } from "framer-motion";

const Reviews = (props) => {
    const appContextData = useContext(AppContext);
    const appConfig = appContextData.appConfig;
    const [globalConfig, setGlobalConfig] = useState({});
    const [reviewsWidth, setReviewsWidth] = useState(0);
    const [reviews, setReviews] = useState([]);
    const [isReviewsSet, setIsReviewsSet] = useState(false);

    const reviewsRef = useRef();

    useEffect(() => {
        if (!isReviewsSet) {
            const reviewsSection = JSON.parse(
                getValue(appConfig, "reviewsSection")._value
            );
            setReviews(reviewsSection);

            const globalConfig = JSON.parse(
                getValue(appConfig, "globalConfig")._value
            );
            setGlobalConfig(globalConfig);
            setIsReviewsSet(true);
        }

        setReviewsWidth(
            reviewsRef.current.scrollWidth - reviewsRef.current.offsetWidth
        );
    }, [isReviewsSet]);

    return (
        <section id="reviews">
            <div className="review-container">
                <motion.div ref={reviewsRef} className="reviews">
                    <motion.div
                        drag="x"
                        dragConstraints={{ right: 0, left: -reviewsWidth }}
                        className="inner-reviews"
                    >
                        {reviews &&
                            reviews.map((review, index) => (
                                <ReviewCard key={index}>
                                    <ReviewCardCompany
                                        anticlock={
                                            (index + 1) % 2 === 0 ? true : false
                                        }
                                    >
                                        <p className="buttonText">
                                            {review.companyName}
                                        </p>
                                    </ReviewCardCompany>
                                    <ReviewCardRatings>
                                        {getStars(review.ratings)}
                                    </ReviewCardRatings>
                                    <ReviewCardText>
                                        {review.text}
                                    </ReviewCardText>
                                    <ReviewCardCountry>
                                        {review.country}
                                    </ReviewCardCountry>
                                </ReviewCard>
                            ))}
                    </motion.div>
                </motion.div>
                <div className="reviews-button">
                    <Button
                        color="yellow"
                        height="50px"
                        whileTap={{ scale: 0.9 }}
                        onClick={() =>
                            window.open(globalConfig.fiverrUrl, "_blank")
                        }
                    >
                        <Marquee
                            gradient={false}
                            speed={50}
                            pauseOnHover={true}
                        >
                            <h4 className="buttonText">
                                •&nbsp;VIEW&nbsp;ON&nbsp;FIVERR&nbsp;•&nbsp;VIEW&nbsp;ON&nbsp;FIVERR&nbsp;•&nbsp;VIEW&nbsp;ON&nbsp;FIVERR&nbsp;
                            </h4>
                        </Marquee>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
