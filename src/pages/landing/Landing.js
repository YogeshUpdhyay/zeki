import Navbar from "../../sections/Navbar/Navbar";
import Hero from "../../sections/Hero/Hero";
import About from "../../sections/About/About";
import Work from "../../sections/Work/Work";
import Reviews from "../../sections/Reviews/Reviews";
import "./Landing.css";

const Landing = (props) => {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Work />
            <Reviews />
        </>
    );
};

export default Landing;
