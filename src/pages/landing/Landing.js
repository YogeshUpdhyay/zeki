import Navbar from "../../sections/Navbar/Navbar";
import Hero from "../../sections/Hero/Hero";
import About from "../../sections/About/About";
import Work from "../../sections/Work/Work";
import Reviews from "../../sections/Reviews/Reviews";
import Contact from "../../sections/Contact/Contact";
import Footer from "../../sections/Footer/Footer";

import "./Landing.css";
import Milestones from "../../sections/Milestones/Milestones";

const Landing = (props) => {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Milestones />
            <Work />
            <Reviews />
            <Contact />
            <Footer />
        </>
    );
};

export default Landing;
