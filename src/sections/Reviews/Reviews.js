import ReviewCard from "../../components/ReviewCard/ReviewCard";
import "./Reviews.css";

const Reviews = (props) => {
    return (
        <div className="review-container">
            <ReviewCard
                companyName={"SLASHERGENO"}
                ratings={5}
                reviewText={`The UI that they created is absolutely stunning and way better 
                    than our previous design, excellent job! Solid work as usual, 
                    have worked several times with him, just very responsive and creative.`}
                country={"United States"}
                color={"blue"}
            />
        </div>
    );
};

export default Reviews;
