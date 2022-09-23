import Navbar from "../../sections/Navbar/Navbar";
import Hero from "../../sections/Hero/Hero";
import About from "../../sections/About/About";
import Work from "../../sections/Work/Work";
import Reviews from "../../sections/Reviews/Reviews";
import "./Landing.css";
import Contact from "../../sections/Contact/Contact";
import Footer from "../../sections/Footer/Footer";
import Button from "../../components/Button";

const Landing = (props) => {
    return (
        <>
            <Navbar />
            <Hero />
            {/* <About /> */}
            <Work />
            <Reviews />
            {/* <Contact /> */}
            <Footer />
        </>
    );
};

export default Landing;
