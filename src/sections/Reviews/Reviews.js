import {
    ReviewCard,
    ReviewCardCompany,
    ReviewCardCountry,
    ReviewCardRatings,
    ReviewCardText,
    getStars,
} from "../../components/ReviewCard";
import SkewedTape from "../../components/SkewedTape";
import Button from "../../components/Button";
import Marquee from "react-fast-marquee";
import "./Reviews.css";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const Reviews = (props) => {
    const [reviewsWidth, setReviewsWidth] = useState(0);
    const [reviews, setReviews] = useState([
        {
            companyName: "SLASHERGENO",
            ratings: 5,
            text: `The UI that they created is absolutely stunning and
                way better than our previous design, excellent job!
                Solid work as usual, have worked several times with
                him, just very responsive and creative.`,
            country: "United States",
        },
        {
            companyName: "RYANMOLLAUN",
            ratings: 5,
            text: `Robin is very skilled in design and listens 
            to what your requirements are, taking this into account 
            with his designs. I was pleasantly surprised and so glad 
            to have found him as we need long term design help. What a find! Thank you Robin.`,
            country: "Australia",
        },
        {
            companyName: "SLASHERGENO",
            ratings: 5,
            text: `The UI that they created is absolutely stunning and
                way better than our previous design, excellent job!
                Solid work as usual, have worked several times with
                him, just very responsive and creative.`,
            country: "United States",
        },
        {
            companyName: "RYANMOLLAUN",
            ratings: 5,
            text: `Robin is very skilled in design and listens 
            to what your requirements are, taking this into account 
            with his designs. I was pleasantly surprised and so glad 
            to have found him as we need long term design help. What a find! Thank you Robin.`,
            country: "Australia",
        },
        {
            companyName: "SLASHERGENO",
            ratings: 5,
            text: `The UI that they created is absolutely stunning and
                way better than our previous design, excellent job!
                Solid work as usual, have worked several times with
                him, just very responsive and creative.`,
            country: "United States",
        },
        {
            companyName: "RYANMOLLAUN",
            ratings: 5,
            text: `Robin is very skilled in design and listens 
            to what your requirements are, taking this into account 
            with his designs. I was pleasantly surprised and so glad 
            to have found him as we need long term design help. What a find! Thank you Robin.`,
            country: "Australia",
        },
    ]);

    const reviewsRef = useRef();

    useEffect(() => {
        setReviewsWidth(
            reviewsRef.current.scrollWidth - reviewsRef.current.offsetWidth
        );
    }, [reviewsWidth]);

    return (
        <>
            <div className="review-container">
                <SkewedTape
                    firstPosition={{
                        top: 0,
                        left: 0,
                    }}
                    secondPosition={{
                        top: 10,
                        left: 0,
                    }}
                    textContent={
                        <h1 className="highlight-text">200+ WEBSITES</h1>
                    }
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
                    repeat={10}
                    speed={50}
                    backgroundColor="black"
                    color="white"
                    rotateFirstBy={2}
                    rotateSecondBy={-5}
                    isFirstUpper={true}
                    isSecondUpper={false}
                />
                <motion.div ref={reviewsRef} className="reviews">
                    <motion.div
                        drag="x"
                        dragConstraints={{ right: 0, left: -reviewsWidth }}
                        className="inner-reviews"
                    >
                        {reviews &&
                            reviews.map((review, index) => (
                                <ReviewCard>
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
                    <Button color="yellow">
                        <Marquee
                            gradient={false}
                            speed={50}
                            pauseOnHover={true}
                        >
                            <h4 className="buttonText">
                                • VIEW ON FIVERR • VIEW ON FIVERR • VIEW ON
                                FIVERR • VIEW ON FIVERR
                            </h4>
                        </Marquee>
                    </Button>
                </div>
            </div>
        </>
    );
};

export default Reviews;
