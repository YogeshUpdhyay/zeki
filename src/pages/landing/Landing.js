import Navbar from "../../sections/Navbar/Navbar";
import Hero from "../../sections/Hero/Hero";
import Work from "../../sections/Work/Work";
import Reviews from "../../sections/Reviews/Reviews";
import Contact from "../../sections/Contact/Contact";
import Footer from "../../sections/Footer/Footer";

import "./Landing.css";

const Landing = (props) => {
    return (
        <>
            <Navbar />
            <Hero />
            <Work />
            <Reviews />
            <Contact />
            <Footer />
        </>
    );
};

export default Landing;
